import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwallService } from '../../../services/swall.service';
import { Modul } from '../../../models/Modul';
import { User } from '../../../models/User';
import { ApiService } from '../../../services/api.service';
import { Category } from 'src/app/models/Category';
import { Department } from 'src/app/models/Department';
import { Subdepartment } from 'src/app/models/subdepartment';
import { Subsubdepartment } from 'src/app/models/subsubdepartment';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Studytype } from 'src/app/models/studytype';


@Component({
  templateUrl: './add-modul.component.html'

})
export class AddModulComponent implements OnInit {

  constructor(private apiSer: ApiService,
    public router: Router,
    private swal: SwallService,
    private fb: FormBuilder
  ) { }
  isSub = false;
  isSubsub = false;
  modulClassName = "moduls";
  catClassName = "categories";
  depClassName = "departments";
  subdepClassName = "subdepartments";
  subsubdepClassName = "subsubdepartments";
  studyTypeClassName = "studytypes";
  userClassName = "users";

  form = this.fb.group({
    name: new FormControl('', Validators.required),
    shortcut: new FormControl(''),
    modulno: new FormControl(0),
    credits: new FormControl(1, [Validators.min(1), Validators.required]),
    duration: new FormControl(1, [Validators.min(1), Validators.required]),
    semesters: new FormControl([], [Validators.minLength(1), Validators.required]),
    category: new FormControl('', Validators.required),
    departmentDto: new FormControl(new Department, Validators.required),
    subDepartment: new FormControl(new Subdepartment),
    subsubdepartments: this.fb.array([]),
    managers: new FormControl([]),
    studyData: this.fb.array([], [Validators.minLength(1), Validators.required])
  });



  cats: Category[] = [];
  deps: Department[] = [];
  subdeps: Subdepartment[] = [];
  subsubdeps: Subsubdepartment[] = [];
  studyTypes: Studytype[] = [];
  users: User[] = [];
  public modul: Modul = new Modul;


  ngOnInit() {
    this.addstudy();
    this.addsubsubdepartment();
    this.apiSer.getAll(this.catClassName).subscribe(data => { this.cats = data; });
    this.apiSer.getAll(this.depClassName).subscribe(data => { this.deps = data; });
    this.apiSer.getAll(this.studyTypeClassName).subscribe(data => { this.studyTypes = data; });
    this.apiSer.getAll(this.userClassName).subscribe(data => { this.users = data; });
  }
  laodSub(dep: Department) {
    this.isSub = true;
    this.apiSer.getDepChild(this.subdepClassName, dep.id).subscribe(data => { this.subdeps = data; });
  }
  laodSubsub(subDep: Subdepartment) {
    this.isSubsub = true;
    this.apiSer.getSubDepChild(this.subsubdepClassName, subDep.id).subscribe(data => { this.subsubdeps = data; });
  }
  onSubmit(): void {
    console.log(this.studyData.length);
    console.log(this.form.value);
    if (this.form.valid)
      console.log("good");
    else console.log("bad");

    this.apiSer.save(this.form.value, this.modulClassName).subscribe(
      data => {
        this.swal.save('modul Saved!');
        this.router.navigate(['/dashboard/moduls']);
      },
      err => {
        // this.errorMessage = err.error.message;       
        this.swal.faild('Save Failed!', err.error.message);
      }
    );


  }
  checkModulName(value: string) { console.log("checkModulNumber:" + value); }
  checkModulNumber(value: string) { console.log("checkModulNumber:" + value); }
  checkModulSortcut(value: string) { console.log("checkModulNumber:" + value); }
  get subsubdepartment() {
    return this.form.controls["subsubdepartments"] as FormArray;
  }

  addsubsubdepartment() {
    const lform = this.fb.group({
      subSubDepartment: new FormControl(new Subsubdepartment),
      modulType: new FormControl(''),
    });
    this.subsubdepartment.push(lform);
  }

  deletesubsubdepartment(index: number) {
    this.subsubdepartment.removeAt(index);
  }

  get studyData() {
    return this.form.controls["studyData"] as FormArray;
  }

  addstudy() {
    const lform = this.fb.group({
      studyType: new FormControl(''),
      sws: new FormControl(1),
      students: new FormControl(1),
    });
    this.studyData.push(lform);
  }

  deletestudy(lessonIndex: number) {
    this.studyData.removeAt(lessonIndex);
  }


}
