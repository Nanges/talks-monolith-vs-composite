import { Injectable } from '@angular/core';

export interface Pet {
    name: string;
    category: string;
}

@Injectable({
    providedIn: 'root',
})
export class PetService {
    private _data: Pet[] = [
        { name: 'Fido', category: 'dog' },
        { name: 'Félix', category: 'cat' },
        { name: 'Bob', category: 'fish' },
    ];

    get data() {
        return this._data;
    }

    constructor() {}

    create(pet: Pet) {
        this._data.push(pet);
    }

    update(index: number, pet: Pet) {
        this._data[index] = pet;
    }

    remove(index: number) {
        this._data.splice(index, 1);
    }
}
