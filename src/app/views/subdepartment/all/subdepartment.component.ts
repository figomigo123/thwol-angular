import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwallService } from '../../../services/swall.service';
import { Subdepartment } from '../../../models/subdepartment';
import { ApiService } from '../../../services/api.service';
import { UpdateService } from '../../../services/update.service';


@Component({
  templateUrl: 'subdepartment.component.html',
})
export class SubdepartmentComponent implements OnInit {

  constructor(private apiser: ApiService,
    public router: Router,
    private updateSer: UpdateService,
    private swal: SwallService
  ) { }
  items: Subdepartment[] = [];
  subdepClassName = "subdepartments";
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
  update(item: Subdepartment) {
    this.updateSer.subdep = item;
    this.router.navigate(['/dashboard/subdepartments/update']);
  }


  async del(item: Subdepartment) {

    const deleteItem = await this.swal.confirme('', '');
    if (deleteItem) {
      this.apiser.del(item.id, this.subdepClassName).subscribe(d => { });

      this.swal.save('Removed!');
      this.loadData();
    }

  }




}
