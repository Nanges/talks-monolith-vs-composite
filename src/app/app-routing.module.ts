import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'categories',
        loadChildren: () => import('./category/category.module').then((m) => m.CategoryModule),
    },
    {
        path: 'pets',
        loadChildren: () => import('./pet/pet.module').then((m) => m.PetModule),
    },
    {
        path: '**',
        redirectTo: 'pets',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
