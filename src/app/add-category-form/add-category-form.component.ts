import { Component } from '@angular/core';
import { BaseCategoryForm } from '../base-category-form';
import { CategoryService } from '../category.service';
import { provideSaveCapability } from '../shared/edition-layout/save-capability';

@Component({
    selector: 'app-add-category-form',
    template: `
        <app-edition-layout [title]="'Add category'">
            <app-category-fields></app-category-fields>
        </app-edition-layout>
    `,
    providers: [provideSaveCapability(AddCategoryFormComponent)],
})
export class AddCategoryFormComponent extends BaseCategoryForm {
    constructor(private categoryService: CategoryService) {
        super();
    }

    saveHandler(): void {
        this.categoryService.create(this.form.value['category']);
    }
}
