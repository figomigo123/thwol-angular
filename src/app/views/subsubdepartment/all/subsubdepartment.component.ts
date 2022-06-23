import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwallService } from '../../../services/swall.service';
import { Subsubdepartment } from '../../../models/subsubdepartment';
import { ApiService } from '../../../services/api.service';
import { UpdateService } from '../../../services/update.service';


@Component({
  templateUrl: 'subsubdepartment.component.html',
})
export class SubsubdepartmentComponent implements OnInit {

  constructor(private apiser: ApiService,
    public router: Router,
    private updateSer: UpdateService,
    private swal: SwallService
  ) { }
  items: Subsubdepartment[] = [];
  subdepClassName = "subsubdepartments";
  pages = 1;
  currentPage = 1;
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.items = [];
    this.apiser.getPage(this.subdepClassName, this.page).subscribe((items) => {
      this.items = items.content;
      this.count = items.totalElements;
      this.tableSize = items.size;
      console.log(this.items);
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
  update(item: Subsubdepartment) {
    this.updateSer.subsubdep = item;
    this.router.navigate(['/dashboard/subsubdepartments/update']);
  }


  async del(item: Subsubdepartment) {

    const deleteItem = await this.swal.confirme('', '');
    if (deleteItem) {
      this.apiser.del(item.id, this.subdepClassName).subscribe(d => { });

      this.swal.save('Removed!');
      this.loadData();
    }

  }




}
