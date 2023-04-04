import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseCategoryForm } from '../base-category-form';
import { CategoryService } from '../category.service';

@Component({
    selector: 'app-add-category-form',
    template: `
        <app-edition-layout io [title]="'Add category'" [form]="form" (save)="saveHandler()">
            <app-category-fields></app-category-fields>
        </app-edition-layout>
    `,
})
export class AddCategoryFormComponent extends BaseCategoryForm {
    constructor(private categoryService: CategoryService, private router: Router, private route: ActivatedRoute) {
        super();
    }

    saveHandler(): void {
        this.categoryService.create(this.form.value['category']);
        this.router.navigate(['../'], { relativeTo: this.route });
    }
}
