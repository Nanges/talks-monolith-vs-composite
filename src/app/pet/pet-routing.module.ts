import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetFormComponent } from './pet-form/pet-form.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetScreenComponent } from './pet-screen/pet-screen.component';
import { PetResolver } from './pet.resolver';

const routes: Routes = [
    {
        path: '',
        component: PetScreenComponent,
        children: [
            {
                path: 'create',
                component: PetFormComponent,
            },
            {
                path: ':id',
                component: PetFormComponent,
                resolve: {
                    pet: PetResolver,
                },
            },
            {
                path: '**',
                component: PetListComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PetRoutingModule {}
