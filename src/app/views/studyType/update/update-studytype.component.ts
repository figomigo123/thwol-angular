import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwallService } from '../../../services/swall.service';
import { ApiService } from '../../../services/api.service';
import { UpdateService } from '../../../services/update.service';
import { UserService } from '../../../services/user.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: './update-studytype.component.html',

})
export class UpdateStudytypeComponent implements OnInit {

  constructor(private apiSer: ApiService,
    private userSer: UserService,
    public router: Router,
    private swal: SwallService,

    private updateSer: UpdateService) { }

  className = "studytypes";
  item = this.updateSer.dep;
  formControl = new FormControl(this.item.name, [Validators.required]);
  ngOnInit() {
    if (this.item?.id == null)
      this.router.navigate(['/dashboard/studytypes']);
  }
  onSubmit(): void {
    if (this.formControl.hasError('required')) return;
    this.item.name = this.formControl.value;
    this.apiSer.save(this.item, this.className).subscribe(
      async data => {
        this.router.navigate(['/dashboard/studytypes/all']);
        await this.swal.save('Studytype Updated!')
      },
      err => {
        this.swal.faild('Update Failed!', '');
      }
    );
  }


}
