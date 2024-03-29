import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwallService } from '../../../services/swall.service';
import { Department } from '../../../models/Department';
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
  items: Department[] = [];
  depClassName = "departments";
  pages = 1;
  currentPage = 1;
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.items = [];
    this.apiser.getPage(this.depClassName, this.page).subscribe((items) => {
      this.items = items.content;
      this.count = items.totalElements;
      this.tableSize = items.size;
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
  update(item: Department) {
    this.updateSer.dep = item;
    this.router.navigate(['/dashboard/departments/update']);
  }


  async del(item: Department) {

    const deleteItem = await this.swal.confirme('', '');
    if (deleteItem) {
      this.apiser.del(item.id, this.depClassName).subscribe(d => { });

      this.swal.save('Removed!');
      this.loadData();
    }

  }




}
