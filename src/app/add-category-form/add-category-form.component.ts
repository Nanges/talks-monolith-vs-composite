import { Component } from '@angular/core';

@Component({
    selector: 'app-add-category-form',
    template: `
        <app-edition-layout [title]="'Add category'">
            <app-category-fields></app-category-fields>
        </app-edition-layout>
    `,
})
export class AddCategoryFormComponent {
    constructor() {}
}
