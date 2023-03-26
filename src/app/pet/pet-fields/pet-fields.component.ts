import { Component, Inject } from '@angular/core';
import { CategoryService } from 'src/app/category/category.service';
import { FormHost, SAVE_CAPABILITY } from 'src/app/shared/edition-layout/save-capability';

@Component({
    selector: 'app-pet-fields',
    templateUrl: './pet-fields.component.html',
    host: {
        class: 'flex flex-col gap-y-3 mb-8',
    },
})
export class PetFieldsComponent {
    get form() {
        return this.host.form;
    }

    get categories() {
        return this.categoryService.data;
    }

    constructor(@Inject(SAVE_CAPABILITY) private host: FormHost, private categoryService: CategoryService) {}
}
