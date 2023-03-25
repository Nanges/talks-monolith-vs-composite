import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-update-category-form',
    template: `<app-edition-layout [title]="'Update category'">
        <app-category-fields></app-category-fields>
        <app-remove-pane></app-remove-pane>
    </app-edition-layout>`,
})
export class UpdateCategoryFormComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
