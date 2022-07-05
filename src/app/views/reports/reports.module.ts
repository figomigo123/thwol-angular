import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ReportsRoutingModule } from './reports-routing.module';
import { IconModule } from '@coreui/icons-angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { modulreportComponent } from './modul/modulreport.component';
@NgModule({
    imports: [
        CommonModule,
        ReportsRoutingModule,
        BsDropdownModule.forRoot(),
        FormsModule,
        IconModule,
        NgxPaginationModule,
        MatSelectModule,
        MatInputModule,
        ReactiveFormsModule
    ],
    declarations: [
        modulreportComponent
    ]
})
export class ReportsModule { }