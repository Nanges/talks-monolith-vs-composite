import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Pet, PetService } from './pet.service';

@Injectable({
    providedIn: 'root',
})
export class PetResolver implements Resolve<Pet> {
    /**
     *
     */
    constructor(private petService: PetService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Pet {
        const pet = this.petService.data[Number(route.paramMap.get('id'))];
        if (pet !== undefined) {
            return pet;
        }

        throw new Error('Pet not found');
    }
}
