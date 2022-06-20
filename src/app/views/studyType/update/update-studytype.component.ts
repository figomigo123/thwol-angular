import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwallService } from '../../../services/swall.service';
import { Category } from '../../../models/Category';
import { User } from '../../../models/User';
import { ApiService } from '../../../services/api.service';
import { UpdateService } from '../../../services/update.service';
import { UserService } from '../../../services/user.service';
import { Studytype } from 'src/app/models/studytype';

@Component({
  templateUrl: './update-studytype.component.html',

})
export class UpdateStudytypeComponent implements OnInit {

  constructor(private apiSer: ApiService,
    private userSer: UserService,
    public router: Router,
    private swal: SwallService,

    private updateSer: UpdateService) { }

  depClassName = "studytypes";
  item: Studytype | undefined;
  form: any = {
    name: null

  };

  ngOnInit() {
    if (this.updateSer.dep == null)
      this.router.navigate(['/dashboard/studytypes']);
    this.item = this.updateSer.dep;
    // console.log(this.cat);
    this.form.name = this.item?.name;
    console.log(this.form.name);

  }

  onSubmit(): void {
    const { name } = this.form;
    console.log(name);
    this.item!.name = name;

    this.apiSer.save(this.item, this.depClassName).subscribe(
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
