import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PetRoutingModule } from './pet-routing.module';
import { PetScreenComponent } from './pet-screen/pet-screen.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { AddPetFormComponent } from './add-pet-form/add-pet-form.component';
import { UpdatePetFormComponent } from './update-pet-form/update-pet-form.component';

@NgModule({
    declarations: [
    PetScreenComponent,
    PetListComponent,
    AddPetFormComponent,
    UpdatePetFormComponent
  ],
    imports: [CommonModule, PetRoutingModule],
})
export class PetModule {}
