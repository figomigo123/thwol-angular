import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CategoryComponent } from './all/category.component';
import { CategoryRoutingModule } from './category-routing.module';
import { AddCategoryComponent } from './add/add-category.component';
import { UpdateCategoryComponent } from './update/update-category.component';
import { IconModule } from '@coreui/icons-angular';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
    imports: [
        CommonModule,
        CategoryRoutingModule,
        BsDropdownModule.forRoot(),
        FormsModule,
        IconModule,
        NgxPaginationModule
    ],
    declarations: [
        CategoryComponent,
        AddCategoryComponent,
        UpdateCategoryComponent
    ]
})
export class CategoryModule { }