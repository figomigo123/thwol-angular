import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwallService } from '../../../services/swall.service';
import { Category } from '../../../models/Category';
import { User } from '../../../models/User';
import { ApiService } from '../../../services/api.service';
import { FormControl, Validators } from '@angular/forms';



@Component({
  templateUrl: './add-category.component.html'
})
export class AddCategoryComponent implements OnInit {

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
  userControl = new FormControl(this.cat.manager, Validators.required);
  catName = new FormControl(this.cat.name, [Validators.required]);
  getErrorMessage() {
    return 'You must enter a value';
  }



  onSubmit(): void {
    if (this.userControl.hasError('required') ||
      this.catName.hasError('required')) return;
    this.cat.name = this.catName.value;
    this.cat.manager = this.userControl.value;
    console.log(this.cat);
    this.apiSer.save(this.cat, this.catClassName).subscribe(
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
