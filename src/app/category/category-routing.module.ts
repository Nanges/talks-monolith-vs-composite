import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryScreenComponent } from './category-screen/category-screen.component';
import { CategoryResolver } from './category.resolver';

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
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class CategoryRoutingModule {}
