import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwallService } from '../../../services/swall.service';
import { Category } from '../../../models/Category';
import { User } from '../../../models/User';
import { ApiService } from '../../../services/api.service';
import { UpdateService } from '../../../services/update.service';
import { UserService } from '../../../services/user.service';
import { Subdepartment } from '../../../models/subdepartment';
import { Department } from 'src/app/models/Department';

@Component({
  templateUrl: './update-subdepartment.component.html',

})
export class UpdateSubdepartmentComponent implements OnInit {

  constructor(private apiSer: ApiService,
    private userSer: UserService,
    public router: Router,
    private swal: SwallService,

    private updateSer: UpdateService) { }

  subdepClassName = "subdepartments";
  depClassName = "departments/all";
  item: Subdepartment | undefined;
  form: any = {
    name: null,
    dep: null
  };

  items: Department[] = [];
  ngOnInit() {
    this.apiSer.getAll(this.depClassName).subscribe(
      data => {
        this.items = data;
      });

    if (this.updateSer.subdep == null)
      this.router.navigate(['/dashboard/subdepartments']);
    this.item = this.updateSer.subdep;
    // console.log(this.cat);
    this.form.name = this.item?.name;
    this.form.dep = this.item?.departmentDto.id;
    console.log(this.form.name);

  }

  onSubmit(): void {
    const { name, dep } = this.form;
    console.log(name);
    this.item!.name = name;
    this.item!.departmentDto.id = dep;

    console.log(this.item);
    this.apiSer.save(this.item, this.subdepClassName).subscribe(
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
