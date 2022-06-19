import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwallService } from '../../../services/swall.service';
import { Category } from '../../../models/Category';
import { ApiService } from '../../../services/api.service';
import { UpdateService } from '../../../services/update.service';


@Component({  
  templateUrl: 'department.component.html',  
})
export class DepartmentComponent implements OnInit {

  constructor(private apiser: ApiService,
    public router: Router,
    private updateSer: UpdateService,
    private swal: SwallService
  ) { }
  cats: Category[] = [];
  catClassName = "categories";
  pages = 1;
  currentPage = 1;
  ngOnInit(): void {   
    this.loadData();
  }
  loadData() {   
    this.cats = [];
    this.apiser.getPage(this.catClassName,this.page).subscribe((cats) => {
      this.cats = cats.content;
      this.count = cats.totalElements;
      this.tableSize = cats.size;
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
  update(cat: Category) {
    this.updateSer.cat = cat;
    this.router.navigate(['/dashboard/categories/update']);
  }


 async del(cat: Category) {  
    
    const deleteItem =await this.swal.confirme('', '');    
    if (deleteItem) {
      this.apiser.del(cat.id, this.catClassName).subscribe(d => { });
     
      this.swal.save('Removed!');
      this.loadData();
    }
   
}




}
