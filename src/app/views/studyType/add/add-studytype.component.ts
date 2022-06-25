import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwallService } from '../../../services/swall.service';
import { ApiService } from '../../../services/api.service';
import { FormControl, Validators } from '@angular/forms';
import { Studytype } from 'src/app/models/studytype';


@Component({
  templateUrl: './add-studytype.component.html'

})
export class AddStudytypeComponent implements OnInit {

  constructor(private apiSer: ApiService,
    public router: Router,
    private swal: SwallService,

  ) { }
  className = "studytypes";
  studytype: Studytype = new Studytype;
  formControl = new FormControl(this.studytype.name, [Validators.required]);

  ngOnInit() {

  }

  onSubmit(): void {
    if (this.formControl.hasError('required')) return;
    this.studytype.name = this.formControl.value;
    console.log(this.studytype);
    this.apiSer.save(this.studytype, this.className).subscribe(
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
