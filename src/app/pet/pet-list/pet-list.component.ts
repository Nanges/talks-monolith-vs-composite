import { Component } from '@angular/core';
import { PetService } from '../pet.service';

@Component({
    selector: 'app-pet-list',
    templateUrl: './pet-list.component.html',
})
export class PetListComponent {
    get data() {
        return this.petService.data;
    }

    constructor(private petService: PetService) {}
}
