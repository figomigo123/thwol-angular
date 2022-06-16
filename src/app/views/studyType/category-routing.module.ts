import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './add/add-category.component';

import { CategoryComponent } from './all/category.component';
import { UpdateCategoryComponent } from './update/update-category.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Category'
    },
    children: [
      {
        path: '',
        redirectTo: 'all'
      },
      {
        path: 'all',
        component: CategoryComponent,
        data: {
          title: 'Category'
        }
      },
      {
        path: 'add',
        component: AddCategoryComponent,
        data: {
          title: 'Add Category'
        }
      },
      {
        path: 'update',
        component: UpdateCategoryComponent,
        data: {
          title: 'Update Category'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {}
