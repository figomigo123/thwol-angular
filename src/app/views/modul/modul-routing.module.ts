import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddModulComponent } from './add/add-modul.component';

import { ModulComponent } from './all/modul.component';
import { UpdateModulComponent } from './update/update-modul.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Modul'
    },
    children: [
      {
        path: '',
        redirectTo: 'all'
      },
      {
        path: 'all',
        component: ModulComponent,
        data: {
          title: 'Modul'
        }
      },
      {
        path: 'add',
        component: AddModulComponent,
        data: {
          title: 'Add Modul'
        }

      },
      {
        path: 'update',
        component: UpdateModulComponent,
        data: {
          title: 'Update Modul'
        }

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulRoutingModule { }
