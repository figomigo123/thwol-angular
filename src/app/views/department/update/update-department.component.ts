import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwallService } from '../../../services/swall.service';
import { Category } from '../../../models/Category';
import { User } from '../../../models/User';
import { ApiService } from '../../../services/api.service';
import { UpdateService } from '../../../services/update.service';
import { UserService } from '../../../services/user.service';
import { Department } from 'src/app/models/Department';
import { FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: './update-department.component.html',

})
export class UpdateDepartmentComponent implements OnInit {

  constructor(private apiSer: ApiService,
    private userSer: UserService,
    public router: Router,
    private swal: SwallService,

    private updateSer: UpdateService) { }

  depClassName = "departments";
  item = this.updateSer.dep;
  depName = new FormControl(this.item.name, [Validators.required]);

  ngOnInit() {
    if (this.item?.id == null)
      this.router.navigate(['/dashboard/departments']);
  }

  onSubmit(): void {
    if (this.depName.hasError('required')) return;
    this.item.name = this.depName.value;
    this.apiSer.save(this.item, this.depClassName).subscribe(
      async data => {
        this.router.navigate(['/dashboard/departments/all']);
        await this.swal.save('Department Updated!')
      },
      err => {
        this.swal.faild('Update Failed!', '');
      }
    );
  }


}
