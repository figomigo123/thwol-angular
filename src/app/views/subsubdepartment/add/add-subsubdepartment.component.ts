import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwallService } from '../../../services/swall.service';
import { Subsubdepartment } from '../../../models/subsubdepartment';
import { ApiService } from '../../../services/api.service';
import { Subdepartment } from '../../../models/subdepartment';


@Component({
  templateUrl: './add-subsubdepartment.component.html'

})
export class AddSubsubdepartmentComponent implements OnInit {

  constructor(private apiSer: ApiService,
    public router: Router,
    private swal: SwallService,

  ) { }
  depClassName = "subdepartments/all";
  subdepClassName = "subsubdepartments";
  subdep: Subsubdepartment = new Subsubdepartment;
  items: Subdepartment[] = [];
  ngOnInit() {
    this.apiSer.getAll(this.depClassName).subscribe(
      data => {
        this.items = data;
      });
  }
  form: any = {
    name: null,
    depId: null
  };

  onSubmit(): void {
    const { name, depId } = this.form;
    console.log(name);
    this.subdep.name = name;
    this.subdep.subDepartmentDto = new Subdepartment;
    this.subdep.subDepartmentDto.id = depId;

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
