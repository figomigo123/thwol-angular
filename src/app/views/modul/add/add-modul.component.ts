import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwallService } from '../../../services/swall.service';
import { Modul } from '../../../models/Modul';
import { User } from '../../../models/User';
import { ApiService } from '../../../services/api.service';
import { Category } from 'src/app/models/Category';
import { Department } from 'src/app/models/Department';
import { Subdepartment } from 'src/app/models/subdepartment';
import { Subsubdepartment } from 'src/app/models/subsubdepartment';


@Component({
  templateUrl: './add-modul.component.html'

})
export class AddModulComponent implements OnInit {

  constructor(private apiSer: ApiService,
    public router: Router,
    private swal: SwallService,

  ) { }

  modulClassName = "modls";
  catClassName = "categories/all";
  depClassName = "departments/all";
  cats: Category[] = [];
  deps: Department[] = [];
  subdeps: Subdepartment[] = [];
  subsubdeps: Subsubdepartment[] = [];
  studyTypes: string[] = [];
  public modul: Modul = new Modul;

  ngOnInit() {
    this.apiSer.getAll(this.catClassName).subscribe(
      data => {
        this.cats = data;
      });
  }

  onSubmit(): void {

  }


}
