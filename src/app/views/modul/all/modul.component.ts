import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwallService } from '../../../services/swall.service';
import { Modul } from '../../../models/Modul';
import { ApiService } from '../../../services/api.service';
import { UpdateService } from '../../../services/update.service';


@Component({
  templateUrl: 'modul.component.html',
})
export class ModulComponent implements OnInit {

  constructor(private apiser: ApiService,
    public router: Router,
    private updateSer: UpdateService,
    private swal: SwallService
  ) { }
  moduls: Modul[] = [];
  modulClassName = "moduls";
  pages = 1;
  currentPage = 1;
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.moduls = [];
    this.apiser.getPage(this.modulClassName, this.page).subscribe((moduls) => {
      this.moduls = moduls.content;
      this.count = moduls.totalElements;
      this.tableSize = moduls.size;
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
  update(modul: Modul) {
    this.updateSer.modul = modul;
    this.router.navigate(['/dashboard/moduls/update']);
  }


  async del(modul: Modul) {

    const deleteItem = await this.swal.confirme('', '');
    if (deleteItem) {
      this.apiser.del(modul.id, this.modulClassName).subscribe(d => { });

      this.swal.save('Removed!');
      this.loadData();
    }

  }




}
