import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwallService } from '../../../services/swall.service';
import { Category } from '../../../models/Category';
import { User } from '../../../models/User';
import { ApiService } from '../../../services/api.service';
import { UpdateService } from '../../../services/update.service';
import { UserService } from '../../../services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subdepartment } from '../../../models/subdepartment';

@Component({
  templateUrl: './update-subsubdepartment.component.html',

})
export class UpdateSubsubdepartmentComponent implements OnInit {

  constructor(private apiSer: ApiService,
    private userSer: UserService,
    public router: Router,
    private swal: SwallService,

    private updateSer: UpdateService) { }
  subdepClassName = "subsubdepartments";
  depClassName = "subdepartments";
  subdep = this.updateSer.subsubdep;
  departments: Subdepartment[] = [];
  subName = new FormControl(this.subdep.name, [Validators.required]);

  ngOnInit() {
    if (this.updateSer.subsubdep.id == null)
      this.router.navigate(['/dashboard/subsubdepartments']);
    this.apiSer.getAll(this.depClassName).subscribe(
      data => {
        this.departments = data;
      });
  }


  onSubmit(): void {
    if (this.subName.hasError('required')) return;
    this.subdep.name = this.subName.value;
    // this.cat.manager = this.userControl.value;
    console.log(this.subdep);
    this.apiSer.save(this.subdep, this.subdepClassName).subscribe(
      async data => {
        this.router.navigate(['/dashboard/subsubdepartments/all']);

        await this.swal.save('subdepartment Updated!')

      },
      err => {

        this.swal.faild('Update Failed!', '');
      }
    );
  }


}
