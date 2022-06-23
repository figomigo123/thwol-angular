import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwallService } from '../../../services/swall.service';
import { ApiService } from '../../../services/api.service';
import { UpdateService } from '../../../services/update.service';
import { UserService } from '../../../services/user.service';
import { Subsubdepartment } from '../../../models/subsubdepartment';
import { Subdepartment } from '../../../models/subdepartment';


@Component({
  templateUrl: './update-subsubdepartment.component.html',

})
export class UpdateSubsubdepartmentComponent implements OnInit {

  constructor(private apiSer: ApiService,
    private userSer: UserService,
    public router: Router,
    private swal: SwallService,

    private updateSer: UpdateService) { }

  subdepClassName = "subsubdepartments";
  depClassName = "subdepartments/all";
  item: Subsubdepartment | undefined;
  form: any = {
    name: null,
    dep: null
  };

  items: Subdepartment[] = [];
  ngOnInit() {
    this.apiSer.getAll(this.depClassName).subscribe(
      data => {
        this.items = data;
      });

    if (this.updateSer.subsubdep == null)
      this.router.navigate(['/dashboard/subsubdepartments']);
    this.item = this.updateSer.subsubdep;
    // console.log(this.cat);
    this.form.name = this.item?.name;
    this.form.dep = this.item?.subDepartmentDto.id;
    console.log(this.form.name);

  }

  onSubmit(): void {
    const { name, dep } = this.form;
    console.log(name);
    this.item!.name = name;
    this.item!.subDepartmentDto.id = dep;

    console.log(this.item);
    this.apiSer.save(this.item, this.subdepClassName).subscribe(
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
