import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryFormComponent } from './add-category-form/add-category-form.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryScreenComponent } from './category-screen/category-screen.component';
import { CategoryResolver } from './category.resolver';
import { UpdateCategoryFormComponent } from './update-category-form/update-category-form.component';

const routes: Routes = [
    {
        path: 'categories',
        component: CategoryScreenComponent,
        children: [
            {
                path: 'create',
                component: AddCategoryFormComponent,
            },
            {
                path: ':id',
                component: UpdateCategoryFormComponent,
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
    {
        path: '**',
        redirectTo: 'categories',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
