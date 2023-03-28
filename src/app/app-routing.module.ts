import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'categories',
        loadChildren: () => import('./category/category.module').then((m) => m.CategoryModule),
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
