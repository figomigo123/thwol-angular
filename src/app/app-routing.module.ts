import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { LoginComponent } from './views/login/login.component';
import { LogoutComponent } from './views/logout/logout.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    redirectTo: 'dashboard',
    pathMatch: 'full',

  },
  {
    path: 'login', component: LoginComponent,
  },

  {
    path: 'dashboard',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./views/user/user.module').then(m => m.UserModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('./views/category/category.module').then(m => m.CategoryModule)
      },
      {
        path: 'departments',
        loadChildren: () => import('./views/department/department.module').then(m => m.DepartmentModule)
      },
      {
        path: 'subdepartments',
        loadChildren: () => import('./views/subdepartment/subdepartment.module').then(m => m.SubdepartmentModule)
      }
      ,
      {
        path: 'subsubdepartments',
        loadChildren: () => import('./views/subsubdepartment/subsubdepartment.module').then(m => m.SubsubdepartmentModule)
      }
      ,
      {
        path: 'studytypes',
        loadChildren: () => import('./views/studytype/studytype.module').then(m => m.StudytypeModule)
      }
      ,
      {
        path: 'moduls',
        loadChildren: () => import('./views/modul/modul.module').then(m => m.ModulModule)
      }
      ,
      {
        path: 'logout',
        loadChildren: () => import('./views/logout/logout.module').then(m => m.LogoutModule)
      }

    ]
  },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
