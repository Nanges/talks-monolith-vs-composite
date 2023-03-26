import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AddPetFormComponent } from './add-pet-form/add-pet-form.component';
import { PetFieldsComponent } from './pet-fields/pet-fields.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetRoutingModule } from './pet-routing.module';
import { PetScreenComponent } from './pet-screen/pet-screen.component';
import { UpdatePetFormComponent } from './update-pet-form/update-pet-form.component';

@NgModule({
    declarations: [PetScreenComponent, PetListComponent, AddPetFormComponent, UpdatePetFormComponent, PetFieldsComponent],
    imports: [CommonModule, PetRoutingModule, SharedModule, ReactiveFormsModule],
})
export class PetModule {}
