import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPetFormComponent } from './add-pet-form/add-pet-form.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetScreenComponent } from './pet-screen/pet-screen.component';
import { PetResolver } from './pet.resolver';
import { UpdatePetFormComponent } from './update-pet-form/update-pet-form.component';

const routes: Routes = [
    {
        path: '',
        component: PetScreenComponent,
        children: [
            {
                path: 'create',
                component: AddPetFormComponent,
            },
            {
                path: ':id',
                component: UpdatePetFormComponent,
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
