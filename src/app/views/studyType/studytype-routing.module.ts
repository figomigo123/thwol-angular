import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudytypeComponent } from './add/add-studytype.component';
import { StudytypeComponent } from './all/studytype.component';
import { UpdateStudytypeComponent } from './update/update-studytype.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Studytype'
    },
    children: [
      {
        path: '',
        redirectTo: 'all'
      },
      {
        path: 'all',
        component: StudytypeComponent,
        data: {
          title: 'Studytype'
        }
      },
      {
        path: 'add',
        component: AddStudytypeComponent,
        data: {
          title: 'Add Studytype'
        }

      },
      {
        path: 'update',
        component: UpdateStudytypeComponent,
        data: {
          title: 'Update Studytype'
        }

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudytypeRoutingModule { }
