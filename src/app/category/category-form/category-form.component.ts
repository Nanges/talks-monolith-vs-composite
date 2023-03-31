import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-category-form',
    templateUrl: './category-form.component.html',
})
export class CategoryFormComponent {
    readonly form: FormGroup<any>;

    constructor() {
        this.form = new FormGroup({
            category: new FormControl(),
        });
    }
}
