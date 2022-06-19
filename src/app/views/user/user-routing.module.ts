import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add/add-user.component';
import { UserComponent } from './all/user.component';
import { UpdateUserComponent } from './update/update-user.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'User'
    },
    children: [
      {
        path: '',
        redirectTo: 'all'
      },
      {
        path: 'all',
        component: UserComponent,
        data: {
          title: 'User'
        }
      },
      {
        path: 'add',
        component: AddUserComponent,
        data: {
          title: 'Add User'
        }
        
      },
      {
        path: 'update',
        component: UpdateUserComponent,
        data: {
          title: 'Update User'
        }

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
