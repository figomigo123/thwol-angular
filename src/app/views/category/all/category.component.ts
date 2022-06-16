import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsyncSubject } from 'rxjs';
import { SwallService } from 'src/app/services/swall.service';
import Swal from 'sweetalert2';
import { Category } from '../../../models/Category';
import { ApiService } from '../../../services/api.service';
import { UpdateService } from '../../../services/update.service';


@Component({  
  templateUrl: 'category.component.html',  
})
export class CategoryComponent implements OnInit {

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
    this.apiser.getPage(this.catClassName,1).subscribe((cats) => {
      this.cats = cats.content;
      this.pages = cats.totalPages;
      this.currentPage = cats.pageNumber+1;
      console.log("cats:" + cats);
      console.log("pages:" + this.pages)
    });
  }
  
  update(cat: Category) {
    this.updateSer.cat = cat;
    this.router.navigate(['/dashboard/categories/update']);
  }


 async del(cat: Category) {  
    
    const deleteItem =await this.swal.confirme('', '');    
    if (deleteItem) {
      this.apiser.del(cat.id, this.catClassName).subscribe(d => { });
      this.loadData();
      this.swal.save('Removed!');
    }
   
}




}
