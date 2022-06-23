import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSubdepartmentComponent } from './add/add-subdepartment.component';
import { SubdepartmentComponent } from './all/subdepartment.component';
import { UpdateSubdepartmentComponent } from './update/update-subdepartment.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Subsubdepartment'
    },
    children: [
      {
        path: '',
        redirectTo: 'all'
      },
      {
        path: 'all',
        component: SubdepartmentComponent,
        data: {
          title: 'Subdepartment'
        }
      },
      {
        path: 'add',
        component: AddSubdepartmentComponent,
        data: {
          title: 'Add Subdepartment'
        }

      },
      {
        path: 'update',
        component: UpdateSubdepartmentComponent,
        data: {
          title: 'Update Subdepartment'
        }

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubdepartmentRoutingModule { }
