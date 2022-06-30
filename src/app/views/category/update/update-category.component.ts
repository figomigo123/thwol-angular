import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwallService } from '../../../services/swall.service';
import { Category } from '../../../models/Category';
import { User } from '../../../models/User';
import { ApiService } from '../../../services/api.service';
import { UpdateService } from '../../../services/update.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './update-category.component.html',

})
export class UpdateCategoryComponent implements OnInit {

  constructor(private apiSer: ApiService,
    public router: Router,
    private swal: SwallService,

    private updateSer: UpdateService) { }
  manager: User = this.updateSer.cat.manager;
  managers: User[] = [];
  userClassName = "users";
  catClassName = "categories";
  cat: Category = this.updateSer.cat;;
  catName = new FormControl(this.cat.name, [Validators.required]);

  ngOnInit() {
    if (this.updateSer.cat.id == null)
      this.router.navigate(['/dashboard/categories']);

    // console.log(this.catName.value)
    this.apiSer.getAll(this.userClassName).subscribe(
      data => {
        this.managers = data;
      });
  }

  onSubmit(): void {
    if (this.catName.hasError('required')) return;
    this.cat.name = this.catName.value;
    // this.cat.manager = this.userControl.value;
    console.log(this.cat);
    this.apiSer.save(this.cat, this.catClassName).subscribe(
      async data => {
        this.router.navigate(['/dashboard/categories/all']);

        await this.swal.save('Category Updated!')

      },
      err => {

        this.swal.faild('Update Failed!', '');
      }
    );
  }

  getErrorMessage() {
    return 'You must enter a value';
  }
}
