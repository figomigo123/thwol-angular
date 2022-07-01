import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwallService } from '../../../services/swall.service';
import { ApiService } from '../../../services/api.service';
import { UpdateService } from '../../../services/update.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './update-user.component.html',

})
export class UpdateUserComponent implements OnInit {

  constructor(private apiSer: ApiService,
    public router: Router,
    private swal: SwallService,
    private updateSer: UpdateService) { }
  userClassName = "users";
  user = this.updateSer.user;
  ngOnInit() {
    if (this.user.id == null) this.router.navigate(['/dashboard/users']);
    console.log("befor checked:" + this.user.enabled)

  }

  lastNameControl = new FormControl(this.user.lastName, [Validators.required]);
  firstNameControl = new FormControl(this.user.firstName, [Validators.required]);
  emailControl = new FormControl(this.user.email, [Validators.required, Validators.email]);

  setAll(checked: boolean) {
    console.log("checked:" + checked)

  }



  onSubmit(): void {

    console.log("onSubmit:" + this.user.roles)

    if (this.lastNameControl.hasError('required') ||
      this.firstNameControl.hasError('required') ||
      this.emailControl.hasError('required') ||
      this.emailControl.hasError('email')) return;

    this.user.lastName = this.lastNameControl.value;
    this.user.firstName = this.firstNameControl.value;
    this.user.email = this.emailControl.value;



    this.apiSer.update(this.user, this.userClassName).subscribe(
      data => {
        this.swal.save('User Saved!');
        this.router.navigate(['/dashboard/users']);
      },
      err => {
        // this.errorMessage = err.error.message;       
        this.swal.faild('Save Failed!', '');
      }
    );
  }

}
