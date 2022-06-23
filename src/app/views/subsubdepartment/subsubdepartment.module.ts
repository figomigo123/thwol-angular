import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { IconModule } from '@coreui/icons-angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddSubsubdepartmentComponent } from './add/add-subsubdepartment.component';
import { SubsubdepartmentComponent } from './all/subsubdepartment.component';
import { SubsubdepartmentRoutingModule } from './subsubdepartment-routing.module';
import { UpdateSubsubdepartmentComponent } from './update/update-subsubdepartment.component';


@NgModule({
    imports: [
        CommonModule,
        SubsubdepartmentRoutingModule,
        BsDropdownModule.forRoot(),
        FormsModule,
        IconModule,
        NgxPaginationModule
    ],
    declarations: [
        SubsubdepartmentComponent,
        AddSubsubdepartmentComponent,
        UpdateSubsubdepartmentComponent
    ]
})
export class SubsubdepartmentModule { }