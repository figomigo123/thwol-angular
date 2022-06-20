import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDepartmentComponent } from './add/add-department.component';
import { DepartmentComponent } from './all/department.component';
import { UpdateDepartmentComponent } from './update/update-department.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Department'
    },
    children: [
      {
        path: '',
        redirectTo: 'all'
      },
      {
        path: 'all',
        component: DepartmentComponent,
        data: {
          title: 'Department'
        }
      },
      {
        path: 'add',
        component: AddDepartmentComponent,
        data: {
          title: 'Add Department'
        }

      },
      {
        path: 'update',
        component: UpdateDepartmentComponent,
        data: {
          title: 'Update Department'
        }

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
