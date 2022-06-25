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
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports: [
        CommonModule,
        SubdepartmentRoutingModule,
        BsDropdownModule.forRoot(),
        FormsModule,
        IconModule,
        NgxPaginationModule,
        MatSelectModule,
        MatInputModule,
        ReactiveFormsModule
    ],
    declarations: [
        SubdepartmentComponent,
        AddSubdepartmentComponent,
        UpdateSubdepartmentComponent
    ]
})
export class SubdepartmentModule { }