import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwallService } from '../../../services/swall.service';
import { Department } from '../../../models/Department';
import { ApiService } from '../../../services/api.service';
import { FormControl, Validators } from '@angular/forms';


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
  depName = new FormControl(this.depatrment.name, [Validators.required]);

  ngOnInit() {

  }

  onSubmit(): void {
    if (this.depName.hasError('required')) return;
    this.depatrment.name = this.depName.value;
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
