import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { provideSaveCapability } from '../../shared/edition-layout/save-capability';
import { provideRemoveCapability, RemoveCapability } from '../../shared/remove-pane/remove-capability';
import { BaseCategoryForm } from '../base-category-form';
import { CategoryService } from '../category.service';

@Component({
    selector: 'app-update-category-form',
    template: ` <app-edition-layout withRedirect [title]="'Update category'">
        <app-category-fields></app-category-fields>
        <app-remove-pane></app-remove-pane>
    </app-edition-layout>`,
    providers: [provideSaveCapability(UpdateCategoryFormComponent), provideRemoveCapability(UpdateCategoryFormComponent)],
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
