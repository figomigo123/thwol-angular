import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModulComponent } from './all/modul.component';
import { ModulRoutingModule } from './modul-routing.module';
import { AddModulComponent } from './add/add-modul.component';
import { UpdateModulComponent } from './update/update-modul.component';
import { IconModule } from '@coreui/icons-angular';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
    imports: [
        CommonModule,
        ModulRoutingModule,
        BsDropdownModule.forRoot(),
        FormsModule,
        IconModule,
        NgxPaginationModule
    ],
    declarations: [
        ModulComponent,
        AddModulComponent,
        UpdateModulComponent
    ]
})
export class ModulModule { }