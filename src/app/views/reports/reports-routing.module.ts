import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { modulreportComponent } from './modul/modulreport.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Reports'
    },
    children: [
      {
        path: '',
        redirectTo: 'all'
      },
      {
        path: 'all',
        component: modulreportComponent,
        data: {
          title: 'Moduls PDF'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
