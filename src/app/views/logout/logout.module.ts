
import { NgModule } from '@angular/core';

import { LogoutComponent } from './logout.component';
import { LogoutRoutingModule } from './logout-routing.module';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DepartmentRoutingModule } from '../department/department-routing.module';
import { LoginComponent } from '../login/login.component';
@NgModule({
    imports: [
        CommonModule,
        LogoutRoutingModule,
        BsDropdownModule.forRoot(),
        LogoutRoutingModule,

    ],
    declarations: [
        // LogoutComponent
    ]
})
export class LogoutModule { }