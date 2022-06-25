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
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports: [
        CommonModule,
        SubsubdepartmentRoutingModule,
        BsDropdownModule.forRoot(),
        FormsModule,
        IconModule,
        NgxPaginationModule,
        MatSelectModule,
        MatInputModule,
        ReactiveFormsModule
    ],
    declarations: [
        SubsubdepartmentComponent,
        AddSubsubdepartmentComponent,
        UpdateSubsubdepartmentComponent
    ]
})
export class SubsubdepartmentModule { }