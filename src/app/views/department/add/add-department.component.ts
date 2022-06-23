import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwallService } from '../../../services/swall.service';
import { Department } from '../../../models/Department';
import { ApiService } from '../../../services/api.service';


@Component({
  templateUrl: './add-department.component.html'

})
export class AddDepartmentComponent implements OnInit {

  constructor(private apiSer: ApiService,
    public router: Router,
    private swal: SwallService,

  ) { }
  depClassName = "departments";
  depatrment: Department = new Department;
  ngOnInit() {

  }
  form: any = {
    name: null,
  };

  onSubmit(): void {
    const { name } = this.form;
    console.log(name);
    this.depatrment.name = name;

    console.log(this.depatrment);
    this.apiSer.save(this.depatrment, this.depClassName).subscribe(
      data => {
        this.swal.save('Department Saved!');
        this.router.navigate(['/dashboard/departments']);

      },
      err => {
        // this.errorMessage = err.error.message;       
        this.swal.faild('Save Failed!', '');
      }
    );
  }


}
