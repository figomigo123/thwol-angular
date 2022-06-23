import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSubsubdepartmentComponent } from './add/add-subsubdepartment.component';
import { SubsubdepartmentComponent } from './all/subsubdepartment.component';
import { UpdateSubsubdepartmentComponent } from './update/update-subsubdepartment.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Subsubsubdepartment'
    },
    children: [
      {
        path: '',
        redirectTo: 'all'
      },
      {
        path: 'all',
        component: SubsubdepartmentComponent,
        data: {
          title: 'Subsubdepartment'
        }
      },
      {
        path: 'add',
        component: AddSubsubdepartmentComponent,
        data: {
          title: 'Add Subsubdepartment'
        }

      },
      {
        path: 'update',
        component: UpdateSubsubdepartmentComponent,
        data: {
          title: 'Update Subsubdepartment'
        }

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubsubdepartmentRoutingModule { }
