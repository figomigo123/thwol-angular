import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
   private updateSer: UpdateService) { }
  cats: Category[] = [];
  catClassName = "categories";
  userClassName = "users";

  ngOnInit(): void {   
    this.loadData();
  }
  loadData() {    
    this.apiser.getAll(this.catClassName).subscribe((cats) => {
      this.cats = cats.content;
      console.log("loadData" + cats)
    });
  }
  
  update(cat: Category) {
    this.updateSer.cat = cat;
    this.router.navigate(['/dashboard/categories/update']);
  }


  del(cat: Category) {  
   // console.log(this.catser.del(cat.id).subscribe(d=>{}));
    
    Swal.fire({
      title: "Remove",
      icon:"error",
      text: 'Do you want to remove category '+cat.name,     
      showCancelButton: true,
      confirmButtonText: 'Remove',
      
    }).then((result) => {
      // Read more about isConfirmed, isDenied below 
      if (result.isConfirmed) {
        this.apiser.del(cat.id,this.catClassName).subscribe(d=>{});
        this.loadData();
        Swal.fire({
          title:'Removed!', icon: 'success', timer: 1000,
          showConfirmButton: false
        })
      } 
    })


}




}
