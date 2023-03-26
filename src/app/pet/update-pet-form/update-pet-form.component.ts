import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { provideSaveCapability } from 'src/app/shared/edition-layout/save-capability';
import { provideRemoveCapability, RemoveCapability } from 'src/app/shared/remove-pane/remove-capability';
import { BasePetForm } from '../base-pet-form';
import { PetService } from '../pet.service';

@Component({
    selector: 'app-update-pet-form',
    template: `
        <app-edition-layout title="Update pet">
            <app-pet-fields></app-pet-fields>
            <app-remove-pane></app-remove-pane>
        </app-edition-layout>
    `,
    providers: [provideSaveCapability(UpdatePetFormComponent), provideRemoveCapability(UpdatePetFormComponent)],
})
export class UpdatePetFormComponent extends BasePetForm implements RemoveCapability {
    private readonly index: number;

    constructor(route: ActivatedRoute, private petService: PetService) {
        super();

        this.index = Number(route.snapshot.paramMap.get('id'));
        const pet = route.snapshot.data['pet'];
        this.form.setValue(pet);
    }

    saveHandler(): void {
        this.petService.update(this.index, this.form.value);
    }

    removeHandler(): void {
        this.petService.remove(this.index);
    }
}
