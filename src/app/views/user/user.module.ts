import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { IconModule } from '@coreui/icons-angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserRoutingModule } from './user-routing.module';
import { AddUserComponent } from './add/add-user.component';
import { UserComponent } from './all/user.component';
import { UpdateUserComponent } from './update/update-user.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        BsDropdownModule.forRoot(),
        FormsModule,
        IconModule,
        NgxPaginationModule,
        MatSelectModule,
        MatInputModule,
        ReactiveFormsModule
    ],
    declarations: [
        UserComponent,
        AddUserComponent,
        UpdateUserComponent
    ]
})
export class UserModule { }