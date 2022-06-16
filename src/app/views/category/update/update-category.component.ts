import {  Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwallService } from 'src/app/services/swall.service';
import Swal from 'sweetalert2';
import { Category } from '../../../models/Category';
import { User } from '../../../models/User';
import { ApiService } from '../../../services/api.service';
import { UpdateService } from '../../../services/update.service';
import { UserService } from '../../../services/user.service';

@Component({ 
  templateUrl: './update-category.component.html',
 
})
export class UpdateCategoryComponent implements OnInit {

  constructor(private apiSer: ApiService,
    private userSer: UserService,
    public router: Router,
    private swal: SwallService,

    private updateSer: UpdateService) { }
  private manager!: User;
  managers: User[] = [];
  userClassName = "users";
  catClassName = "categories";
  cat: Category | undefined;
  ngOnInit() {
    if (this.updateSer.cat == null)
      this.router.navigate(['/dashboard/categories']);
    this.cat = this.updateSer.cat;

    console.log(this.updateSer.cat);
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
      async data => {
      //  this.router.navigate(['/dashboard/categories/all']);     
        
      await  this.swal.save('Category Updated!')

      },
      err => {
        
        this.swal.faild('Update Failed!', '');
      }
    );
  }


}
