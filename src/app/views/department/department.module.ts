import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { IconModule } from '@coreui/icons-angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddDepartmentComponent } from './add/add-category.component';
import { DepartmentComponent } from './all/department.component';
import { DepartmentRoutingModule } from './department-routing.module';
import { UpdateDepartmentComponent } from './update/update-department.component';


@NgModule({
    imports: [
        CommonModule,
        DepartmentRoutingModule,
        BsDropdownModule.forRoot(),
        FormsModule,
        IconModule,
        NgxPaginationModule
    ],
    declarations: [
        DepartmentComponent,
        AddDepartmentComponent,
        UpdateDepartmentComponent
    ]
})
export class DepartmentModule { }