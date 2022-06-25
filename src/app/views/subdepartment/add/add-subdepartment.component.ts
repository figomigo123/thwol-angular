import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwallService } from '../../../services/swall.service';
import { ApiService } from '../../../services/api.service';
import { FormControl, Validators } from '@angular/forms';
import { Department } from 'src/app/models/Department';
import { Subdepartment } from 'src/app/models/subdepartment';



@Component({
  templateUrl: './add-subdepartment.component.html'
})
export class AddSubdepartmentComponent implements OnInit {

  constructor(private apiSer: ApiService,
    public router: Router,
    private swal: SwallService,

  ) { }
  public subdep: Subdepartment = new Subdepartment;
  subdepClassName = "subdepartments";
  depClassName = "departments";
  departments: Department[] = [];
  depControl = new FormControl(this.subdep.departmentDto, Validators.required);
  subName = new FormControl(this.subdep.name, [Validators.required]);


  ngOnInit() {
    this.apiSer.getAll(this.depClassName).subscribe(
      data => {
        this.departments = data;
      });
  }



  onSubmit(): void {
    if (this.depControl.hasError('required') ||
      this.subName.hasError('required')) return;
    this.subdep.name = this.subName.value;
    this.subdep.departmentDto = this.depControl.value;
    console.log(this.subdep);
    this.apiSer.save(this.subdep, this.subdepClassName).subscribe(
      data => {
        this.swal.save('Subdepartment Saved!');
        this.router.navigate(['/dashboard/subdepartments']);
      },
      err => {
        // this.errorMessage = err.error.message;       
        this.swal.faild('Save Failed!', '');
      }
    );
  }


}
