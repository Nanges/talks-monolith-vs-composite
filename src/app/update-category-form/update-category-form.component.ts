import { Component, forwardRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCategoryForm } from '../base-category-form';
import { CategoryService } from '../category.service';
import { EDITION_LAYOUT_DECORATED } from '../shared/edition-layout/edition-layout';
import { RemovePane, REMOVE_PANE_DECORATED } from '../shared/remove-pane/remove-pane';

@Component({
    selector: 'app-update-category-form',
    template: ` <app-edition-layout [title]="'Update category'">
        <app-category-fields></app-category-fields>
        <app-remove-pane></app-remove-pane>
    </app-edition-layout>`,
    providers: [
        {
            provide: EDITION_LAYOUT_DECORATED,
            useExisting: forwardRef(() => UpdateCategoryFormComponent),
        },
        {
            provide: REMOVE_PANE_DECORATED,
            useExisting: forwardRef(() => UpdateCategoryFormComponent),
        },
    ],
})
export class UpdateCategoryFormComponent extends BaseCategoryForm implements RemovePane {
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
