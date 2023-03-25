import { Component, forwardRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCategoryForm } from '../base-category-form';
import { CategoryService } from '../category.service';
import { SAVE_CAPABILITY } from '../shared/edition-layout/save-capability';
import { RemoveCapability, REMOVE_CAPABILITY } from '../shared/remove-pane/remove-capability';

@Component({
    selector: 'app-update-category-form',
    template: ` <app-edition-layout [title]="'Update category'">
        <app-category-fields></app-category-fields>
        <app-remove-pane></app-remove-pane>
    </app-edition-layout>`,
    providers: [
        {
            provide: SAVE_CAPABILITY,
            useExisting: forwardRef(() => UpdateCategoryFormComponent),
        },
        {
            provide: REMOVE_CAPABILITY,
            useExisting: forwardRef(() => UpdateCategoryFormComponent),
        },
    ],
})
export class UpdateCategoryFormComponent extends BaseCategoryForm implements RemoveCapability {
    private readonly index: number;

    constructor(route: ActivatedRoute, private categoryService: CategoryService) {
        super();
        this.index = Number(route.snapshot.paramMap.get('id'));
        const category = route.snapshot.data['category'];

        this.form.setValue({
            category,
        });
    }

    removeHandler(): void {
        this.categoryService.remove(this.index);
    }

    saveHandler(): void {
        this.categoryService.update(this.index, this.form.value['category']);
    }
}
