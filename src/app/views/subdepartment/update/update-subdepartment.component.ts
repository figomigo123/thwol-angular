import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwallService } from '../../../services/swall.service';
import { ApiService } from '../../../services/api.service';
import { UpdateService } from '../../../services/update.service';
import { UserService } from '../../../services/user.service';
import { FormControl, Validators } from '@angular/forms';
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
  depClassName = "departments";
  subdep = this.updateSer.subdep;
  departments: Department[] = [];
  subName = new FormControl(this.subdep.name, [Validators.required]);

  ngOnInit() {
    if (this.updateSer.subdep.id == null)
      this.router.navigate(['/dashboard/subdepartments']);
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
        this.router.navigate(['/dashboard/subdepartments/all']);

        await this.swal.save('subdepartment Updated!')

      },
      err => {

        this.swal.faild('Update Failed!', '');
      }
    );
  }


}
