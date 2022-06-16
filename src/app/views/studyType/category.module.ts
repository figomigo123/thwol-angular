import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CategoryComponent } from './all/category.component';
import { CategoryRoutingModule } from './category-routing.module';
import { AddCategoryComponent } from './add/add-category/add-category.component';
import { UpdateCategoryComponent } from './update/update-category.component';


@NgModule({
    imports: [
        CommonModule,
        CategoryRoutingModule,
        BsDropdownModule.forRoot(),
        FormsModule
    ],
    declarations: [
        CategoryComponent,
        AddCategoryComponent,
        UpdateCategoryComponent
    ]
})
export class CategoryModule { }