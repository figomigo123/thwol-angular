import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { IconModule } from '@coreui/icons-angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddStudytypeComponent } from './add/add-studytype.component';
import { StudytypeComponent } from './all/studytype.component';
import { StudytypeRoutingModule } from './studytype-routing.module';
import { UpdateStudytypeComponent } from './update/update-studytype.component';


@NgModule({
    imports: [
        CommonModule,
        StudytypeRoutingModule,
        BsDropdownModule.forRoot(),
        FormsModule,
        IconModule,
        NgxPaginationModule
    ],
    declarations: [
        StudytypeComponent,
        AddStudytypeComponent,
        UpdateStudytypeComponent
    ]
})
export class StudytypeModule { }