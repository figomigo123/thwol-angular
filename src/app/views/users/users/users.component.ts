import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/User';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  
})
export class UsersComponent implements OnInit {

  constructor(private apiSer: ApiService,
   ) { }
  users: User[] = [];

  userClassName = "users";

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.apiSer.getAll(this.userClassName).subscribe((usrs) => {
      this.users = usrs;       

    });
  }
del(userId:string){}
}
