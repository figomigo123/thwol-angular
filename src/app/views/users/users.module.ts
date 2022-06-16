import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { UsersRoutingModule } from './users-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersComponent } from './users/users.component';
import {
    ButtonGroupModule,
    ButtonModule,
    FormModule,
    GridModule,
    ListGroupModule,
    SharedModule,
    DropdownModule,
    CardModule
} from '@coreui/angular';
import { DocsComponentsModule } from '@docs-components/docs-components.module';


@NgModule({
    imports: [
        CommonModule,
        UsersRoutingModule,
        BsDropdownModule.forRoot(),
        FormsModule,
        FormModule,
        GridModule,
        ButtonGroupModule,
        ButtonModule,
        GridModule,
        BsDropdownModule,       
        ListGroupModule,
        SharedModule,
        DocsComponentsModule,
        CardModule,
        ReactiveFormsModule,
    ],
    declarations: [
        UsersComponent,
        AddUserComponent,
        
    ]
})
export class UsersModule { }