import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { IconModule } from '@coreui/icons-angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddSubdepartmentComponent } from './add/add-subdepartment.component';
import { SubdepartmentComponent } from './all/subdepartment.component';
import { SubdepartmentRoutingModule } from './subdepartment-routing.module';
import { UpdateSubdepartmentComponent } from './update/update-subdepartment.component';


@NgModule({
    imports: [
        CommonModule,
        SubdepartmentRoutingModule,
        BsDropdownModule.forRoot(),
        FormsModule,
        IconModule,
        NgxPaginationModule
    ],
    declarations: [
        SubdepartmentComponent,
        AddSubdepartmentComponent,
        UpdateSubdepartmentComponent
    ]
})
export class SubdepartmentModule { }