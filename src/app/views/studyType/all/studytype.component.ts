import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwallService } from '../../../services/swall.service';
import { Studytype } from '../../../models/studytype';
import { ApiService } from '../../../services/api.service';
import { UpdateService } from '../../../services/update.service';


@Component({
  templateUrl: 'studytype.component.html',
})
export class StudytypeComponent implements OnInit {

  constructor(private apiser: ApiService,
    public router: Router,
    private updateSer: UpdateService,
    private swal: SwallService
  ) { }
  items: Studytype[] = [];
  className = "studytypes";
  pages = 1;
  currentPage = 1;
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.items = [];
    this.apiser.getPage(this.className, this.page).subscribe((items) => {
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
  update(item: Studytype) {
    this.updateSer.dep = item;
    this.router.navigate(['/dashboard/studytypes/update']);
  }


  async del(item: Studytype) {

    const deleteItem = await this.swal.confirme('', '');
    if (deleteItem) {
      this.apiser.del(item.id, this.className).subscribe(d => { });

      this.swal.save('Removed!');
      this.loadData();
    }

  }




}
