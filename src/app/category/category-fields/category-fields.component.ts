import { Component } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Component({
    selector: 'app-category-fields',
    templateUrl: './category-fields.component.html',
    host: {
        class: 'flex flex-col gap-y-3 mb-8',
    },
})
export class CategoryFieldsComponent {
    get form() {
        return this.formGroupDirective.form;
    }

    constructor(private formGroupDirective: FormGroupDirective) {}
}
