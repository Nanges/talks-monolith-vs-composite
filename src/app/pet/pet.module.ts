import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PetFormComponent } from './pet-form/pet-form.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetRoutingModule } from './pet-routing.module';
import { PetScreenComponent } from './pet-screen/pet-screen.component';

@NgModule({
    declarations: [PetFormComponent, PetListComponent, PetScreenComponent],
    imports: [CommonModule, PetRoutingModule, ReactiveFormsModule],
})
export class PetModule {}
