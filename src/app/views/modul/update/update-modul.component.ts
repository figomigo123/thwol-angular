import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwallService } from '../../../services/swall.service';
import { Modul } from '../../../models/Modul';
import { User } from '../../../models/User';
import { ApiService } from '../../../services/api.service';
import { UpdateService } from '../../../services/update.service';

@Component({
  templateUrl: './update-modul.component.html',

})
export class UpdateModulComponent implements OnInit {

  constructor(private apiSer: ApiService,
    public router: Router,
    private swal: SwallService,

    private updateSer: UpdateService) { }
  private manager: User = new User;
  managers: User[] = [];
  userClassName = "users";
  modulClassName = "categories";
  modul: Modul | undefined;
  form: any = {
    name: null,
    man: null
  };

  ngOnInit() {
    if (this.updateSer.modul == null)
      this.router.navigate(['/dashboard/moduls']);
    this.modul = this.updateSer.modul;
    // console.log(this.cat);
    this.form.name = this.modul?.name;

    console.log(this.form.name);
    this.apiSer.getAll(this.userClassName).subscribe(
      data => {
        this.managers = data;
      });
  }

  onSubmit(): void {

  }


}
