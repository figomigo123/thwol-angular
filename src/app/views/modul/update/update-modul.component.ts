import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwallService } from '../../../services/swall.service';
import { Modul } from '../../../models/Modul';
import { User } from '../../../models/User';
import { ApiService } from '../../../services/api.service';
import { UpdateService } from '../../../services/update.service';
import { FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Category } from 'src/app/models/Category';
import { Department } from 'src/app/models/Department';
import { Studytype } from 'src/app/models/studytype';
import { Subdepartment } from 'src/app/models/subdepartment';
import { Subsubdepartment } from 'src/app/models/subsubdepartment';

@Component({
  templateUrl: './update-modul.component.html',

})
export class UpdateModulComponent implements OnInit {

  constructor(private apiSer: ApiService, private updateSer: UpdateService,
    public router: Router,
    private swal: SwallService,
    private fb: FormBuilder
  ) { }

  modulClassName = "moduls";
  catClassName = "categories";
  depClassName = "departments";
  subdepClassName = "subdepartments";
  subsubdepClassName = "subsubdepartments";
  studyTypeClassName = "studytypes";
  userClassName = "users";


  cats: Category[] = [];
  deps: Department[] = [];
  subdeps: Subdepartment[] = [];
  subsubdeps: Subsubdepartment[] = [];
  studyTypes: Studytype[] = [];
  users: User[] = [];
  public modul: Modul = this.updateSer.modul;
  isSub = true;
  isSubsub = false;
  form = this.fb.group({
    name: new FormControl(this.modul.name, Validators.required),
    shortcut: new FormControl(this.modul.shortcut),
    modulno: new FormControl(this.modul.modulno),
    credits: new FormControl(this.modul.credits, [Validators.min(1), Validators.required]),
    duration: new FormControl(this.modul.duration, [Validators.min(1), Validators.required]),
    semesters: new FormControl(this.modul.semesters, [Validators.minLength(1), Validators.required]),
    category: new FormControl(this.modul.category, Validators.required),
    departmentDto: new FormControl(this.modul.departmentDto, Validators.required),
    subDepartment: new FormControl(this.modul.subDepartment || new Subdepartment),
    subsubdepartment: new FormControl(this.modul.subsubdepartment || new Subsubdepartment),
    managers: new FormControl(this.modul.managers),
    studyData: this.fb.array([], [Validators.minLength(1), Validators.required])
  });

  compareFunction(o1: any, o2: any) {
    return (o1.name == o2.name && o1.id == o2.id);
  }

  ngOnInit() {
    if (this.updateSer.modul.id == null) this.router.navigate(['/dashboard/moduls']);
    this.isSubsub = this.modul.subDepartment != null;
    this.addstudy();
    this.apiSer.getAll(this.catClassName).subscribe(data => { this.cats = data; });
    this.apiSer.getAll(this.depClassName).subscribe(data => { this.deps = data; });
    this.apiSer.getAll(this.studyTypeClassName).subscribe(data => { this.studyTypes = data; });
    this.apiSer.getAll(this.userClassName).subscribe(data => { this.users = data; });
    this.apiSer.getAll(this.subdepClassName).subscribe(data => { this.subdeps = data; });
    this.apiSer.getAll(this.subsubdepClassName).subscribe(data => { this.subsubdeps = data; });



  }
  laodSub(dep: Department) {
    console.log('dep:' + dep.name)
    this.isSub = true;
    this.apiSer.getDepChild(this.subdepClassName, dep.id).subscribe(data => { this.subdeps = data; console.log(data) });


  }
  laodSubsub(subdep: Subdepartment) {
    this.isSubsub = true;
    this.apiSer.getSubDepChild(this.subsubdepClassName, subdep.id).subscribe(data => { this.subsubdeps = data; });
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
        this.swal.faild('Save Failed!', '');
      }
    );


  }
  checkModulName(value: string) { console.log("checkModulNumber:" + value); }
  checkModulNumber(value: string) { console.log("checkModulNumber:" + value); }
  checkModulSortcut(value: string) { console.log("checkModulNumber:" + value); }
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




