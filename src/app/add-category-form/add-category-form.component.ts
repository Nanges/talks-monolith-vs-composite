import { Component, forwardRef } from '@angular/core';
import { BaseCategoryForm } from '../base-category-form';
import { CategoryService } from '../category.service';
import { EDITION_LAYOUT_DECORATED } from '../shared/edition-layout/edition-layout';

@Component({
    selector: 'app-add-category-form',
    template: `
        <app-edition-layout [title]="'Add category'">
            <app-category-fields></app-category-fields>
        </app-edition-layout>
    `,
    providers: [
        {
            provide: EDITION_LAYOUT_DECORATED,
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
