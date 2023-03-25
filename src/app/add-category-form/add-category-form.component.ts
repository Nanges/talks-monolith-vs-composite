import { Component, forwardRef } from '@angular/core';
import { BaseCategoryForm } from '../base-category-form';
import { CategoryService } from '../category.service';
import { SAVE_CAPABILITY } from '../shared/edition-layout/save-capability';

@Component({
    selector: 'app-add-category-form',
    template: `
        <app-edition-layout [title]="'Add category'">
            <app-category-fields></app-category-fields>
        </app-edition-layout>
    `,
    providers: [
        {
            provide: SAVE_CAPABILITY,
            useExisting: forwardRef(() => AddCategoryFormComponent),
        },
    ],
})
export class AddCategoryFormComponent extends BaseCategoryForm {
    constructor(private categoryService: CategoryService) {
        super();
    }

    saveHandler(): void {
        this.categoryService.create(this.form.value['category']);
    }
}
