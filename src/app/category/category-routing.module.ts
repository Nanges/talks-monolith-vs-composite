import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryResolver } from '../core/category.resolver';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryScreenComponent } from './category-screen/category-screen.component';

const routes: Routes = [
    {
        path: '',
        component: CategoryScreenComponent,
        children: [
            {
                path: 'create',
                component: CategoryFormComponent,
            },
            {
                path: ':id',
                component: CategoryFormComponent,
                resolve: {
                    category: CategoryResolver,
                },
            },
            {
                path: '**',
                component: CategoryListComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CategoryRoutingModule {}
