import {  Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwallService } from '../../../services/swall.service';
import { Category } from '../../../models/Category';
import { User } from '../../../models/User';
import { ApiService } from '../../../services/api.service';


@Component({ 
  templateUrl: './add-user.component.html'
  
})
export class AddUserComponent implements OnInit {

  constructor(private apiSer: ApiService,   
    public router: Router,
    private swal: SwallService,
    
  ) { }
  public form: User = new User;
    userClassName = "users";
  ngOnInit() {   
    
  }
 
  onSubmit(): void {
    console.log(this.form)
    this.apiSer.save(this.form,this.userClassName).subscribe(
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
