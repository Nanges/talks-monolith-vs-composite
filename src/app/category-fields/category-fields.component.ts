import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-category-fields',
    templateUrl: './category-fields.component.html',
    host: {
        class: 'flex flex-col gap-y-3 mb-8',
    },
})
export class CategoryFieldsComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
