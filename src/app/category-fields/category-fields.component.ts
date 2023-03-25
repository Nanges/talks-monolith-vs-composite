import { Component, Inject } from '@angular/core';
import { EDITION_LAYOUT_DECORATED, FormHost } from '../shared/edition-layout/edition-layout';

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

    constructor(@Inject(EDITION_LAYOUT_DECORATED) private host: FormHost) {}
}
