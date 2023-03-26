import { Component, Inject } from '@angular/core';
import { FormHost, SAVE_CAPABILITY } from '../../shared/edition-layout/save-capability';

@Component({
    selector: 'app-category-fields',
    templateUrl: './category-fields.component.html',
    host: {
        class: 'flex flex-col gap-y-3 mb-8',
    },
})
export class CategoryFieldsComponent {
    get form() {
        return this.host.form;
    }

    constructor(@Inject(SAVE_CAPABILITY) private host: FormHost) {}
}
