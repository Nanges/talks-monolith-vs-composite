import { Component } from '@angular/core';

@Component({
    selector: 'app-pet-screen',
    template: `<h1>Pets</h1>
        <router-outlet></router-outlet>`,
})
export class PetScreenComponent {
    constructor() {}
}
