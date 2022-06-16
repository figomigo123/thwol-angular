import {  Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwallService } from 'src/app/services/swall.service';
import Swal from 'sweetalert2';
import { Category } from '../../../models/Category';
import { User } from '../../../models/User';
import { ApiService } from '../../../services/api.service';


@Component({ 
  templateUrl: './add-category.component.html'
  
})
export class AddCategoryComponent implements OnInit {

  constructor(private apiSer: ApiService,   
    public router: Router,
    private swal: SwallService
  ) { }
  public manager!: User
  catClassName = "categories";
    userClassName = "users";
  managers: User[] = [];
  cat: Category | undefined;
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
    this.cat!.name = name;
    this.manager.id = man
    this.cat!.manager=this.manager
    console.log(this.cat);
    this.apiSer.save(this.cat,this.catClassName).subscribe(
      data => {          
        this.swal.save('Category Saved!');
      },
      err => {
        // this.errorMessage = err.error.message;       
        this.swal.faild('Save Failed!', '');
      }
    );
  }


}
