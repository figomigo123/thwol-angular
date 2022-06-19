import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwallService } from '../../../services/swall.service';
import { Category } from '../../../models/Category';
import { ApiService } from '../../../services/api.service';
import { UpdateService } from '../../../services/update.service';
import { User } from 'src/app/models/User';


@Component({  
  templateUrl: 'user.component.html',  
})
export class UserComponent implements OnInit {

  constructor(private apiser: ApiService,
    public router: Router,
    private updateSer: UpdateService,
    private swal: SwallService
  ) { }
  users: User[] = [];
  userClassName = "users";
  pages = 1;
  currentPage = 1;
  ngOnInit(): void {   
    this.loadData();
  }
  loadData() {   
    this.users = [];
    this.apiser.getPage(this.userClassName,this.page).subscribe((users) => {
      this.users = users.content;
      this.count = users.totalElements;
      this.tableSize = users.size;
    });
  }
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  

  onTableDataChange(event: any) {
    console.log("event:" + event);
    this.page = event;
    this.loadData();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
   // this.page = 1;
    this.loadData();
  }
  update(user: User) {
    this.updateSer.user = user;
    this.router.navigate(['/dashboard/users/update']);
  }


 async del(user: User) {  
    
    const deleteItem =await this.swal.confirme('', '');    
    if (deleteItem) {
      this.apiser.del(user.id, this.userClassName).subscribe(d => { });     
      this.swal.save('Removed!');
      this.loadData();
    }
   
}




}
