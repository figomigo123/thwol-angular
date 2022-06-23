import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwallService } from '../../../services/swall.service';
import { Subdepartment } from '../../../models/subdepartment';
import { ApiService } from '../../../services/api.service';
import { Department } from 'src/app/models/Department';


@Component({
  templateUrl: './add-subdepartment.component.html'

})
export class AddSubdepartmentComponent implements OnInit {

  constructor(private apiSer: ApiService,
    public router: Router,
    private swal: SwallService,

  ) { }
  depClassName = "departments/all";
  subdepClassName = "subdepartments";
  subdep: Subdepartment = new Subdepartment;
  items: Department[] = [];
  ngOnInit() {
    this.apiSer.getAll(this.depClassName).subscribe(
      data => {
        this.items = data;
      });
  }
  form: any = {
    name: null,
    depId: null
  };

  onSubmit(): void {
    const { name, depId } = this.form;
    console.log(name);
    this.subdep.name = name;
    this.subdep.departmentDto = new Department;
    this.subdep.departmentDto.id = depId;

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
