import {  Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwallService } from '../../../services/swall.service';
import { Category } from '../../../models/Category';
import { User } from '../../../models/User';
import { ApiService } from '../../../services/api.service';


@Component({ 
  templateUrl: './add-department.component.html'
  
})
export class AddDepartmentComponent implements OnInit {

  constructor(private apiSer: ApiService,   
    public router: Router,
    private swal: SwallService,
    
  ) { }
  public manager: User = new User;
  catClassName = "categories";
    userClassName = "users";
  managers: User[] = [];
  public cat: Category = new Category;
  ngOnInit() {   
    this.apiSer.getAll(this.userClassName).subscribe(
      data => {       
        this.managers = data;
      });
  }
  form: any = {
    name: null,
    man:null
  };
 
  onSubmit(): void {
    const { name,man } = this.form; 
    console.log(name);
    this.cat.name = name;
    this.manager.id = man
    this.cat.manager=this.manager
    console.log(this.cat);
    this.apiSer.save(this.cat,this.catClassName).subscribe(
      data => {          
        this.swal.save('Category Saved!');
        this.router.navigate(['/dashboard/categories']);

      },
      err => {
        // this.errorMessage = err.error.message;       
        this.swal.faild('Save Failed!', '');
      }
    );
  }


}
