import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwallService } from '../../../services/swall.service';
import { Studytype } from '../../../models/studytype';
import { ApiService } from '../../../services/api.service';


@Component({
  templateUrl: './add-studytype.component.html'
})
export class AddStudytypeComponent implements OnInit {

  constructor(private apiSer: ApiService,
    public router: Router,
    private swal: SwallService,

  ) { }
  studyClassName = "studytypes";
  iteme: Studytype = new Studytype;
  ngOnInit() {

  }
  form: any = {
    name: null,
  };

  onSubmit(): void {
    const { name } = this.form;
    console.log(name);
    this.iteme.name = name;

    console.log(this.iteme);
    this.apiSer.save(this.iteme, this.studyClassName).subscribe(
      data => {
        this.swal.save('Studytype Saved!');
        this.router.navigate(['/dashboard/studytypes']);

      },
      err => {
        // this.errorMessage = err.error.message;       
        this.swal.faild('Save Failed!', '');
      }
    );
  }


}
