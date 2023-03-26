import { Component } from '@angular/core';
import { provideSaveCapability } from 'src/app/shared/edition-layout/save-capability';
import { BasePetForm } from '../base-pet-form';
import { PetService } from '../pet.service';

@Component({
    selector: 'app-add-pet-form',
    template: `<app-edition-layout title="Add pet">
        <app-pet-fields></app-pet-fields>
    </app-edition-layout>`,
    providers: [provideSaveCapability(AddPetFormComponent)],
})
export class AddPetFormComponent extends BasePetForm {
    constructor(private petService: PetService) {
        super();
    }

    saveHandler(): void {
        this.petService.create(this.form.value);
    }
}
