import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwallService } from '../../../services/swall.service';
import { ApiService } from '../../../services/api.service';
import { FormControl, Validators } from '@angular/forms';
import { Subdepartment } from '../../../models/subdepartment';
import { Subsubdepartment } from '../../../models/subsubdepartment';




@Component({
  templateUrl: './add-subsubdepartment.component.html'
})
export class AddSubsubdepartmentComponent implements OnInit {

  constructor(private apiSer: ApiService,
    public router: Router,
    private swal: SwallService,

  ) { }
  public subdep: Subsubdepartment = new Subsubdepartment;
  subdepClassName = "subsubdepartments";
  depClassName = "subdepartments";
  departments: Subdepartment[] = [];
  depControl = new FormControl(this.subdep.subDepartmentDto, Validators.required);
  subName = new FormControl(this.subdep.name, [Validators.required]);


  ngOnInit() {
    this.apiSer.getAll(this.depClassName).subscribe(
      data => {
        this.departments = data;
      });
  }



  onSubmit(): void {
    if (this.depControl.hasError('required') ||
      this.subName.hasError('required')) return;
    this.subdep.name = this.subName.value;
    this.subdep.subDepartmentDto = this.depControl.value;
    console.log(this.subdep);
    this.apiSer.save(this.subdep, this.subdepClassName).subscribe(
      data => {
        this.swal.save('Subsubdepartment Saved!');
        this.router.navigate(['/dashboard/subsubdepartments']);
      },
      err => {
        // this.errorMessage = err.error.message;       
        this.swal.faild('Save Failed!', '');
      }
    );
  }


}
