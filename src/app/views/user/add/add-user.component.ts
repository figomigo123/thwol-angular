import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwallService } from '../../../services/swall.service';
import { Category } from '../../../models/Category';
import { User } from '../../../models/User';
import { ApiService } from '../../../services/api.service';
import { FormControl, Validators } from '@angular/forms';



@Component({
  templateUrl: './add-user.component.html'
})
export class AddUserComponent implements OnInit {

  constructor(private apiSer: ApiService,
    public router: Router,
    private swal: SwallService,

  ) { }

  userClassName = "users";
  user = new User;
  ngOnInit() {

  }
  roleControl = new FormControl('', Validators.required);
  lastNameControl = new FormControl('', [Validators.required]);
  firstNameControl = new FormControl('', [Validators.required]);
  emailControl = new FormControl('', [Validators.required]);

  onSubmit(): void {
    if (this.roleControl.hasError('required') ||
      this.lastNameControl.hasError('required') ||
      this.firstNameControl.hasError('required') ||
      this.emailControl.hasError('required')) return;

    this.user.lastName = this.lastNameControl.value;
    this.user.firstName = this.firstNameControl.value;
    this.user.email = this.emailControl.value;
    this.user.roles[0] = this.roleControl.value;



    this.apiSer.save(this.user, this.userClassName).subscribe(
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
