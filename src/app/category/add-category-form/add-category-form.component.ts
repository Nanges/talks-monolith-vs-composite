import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
    selector: 'app-add-category-form',
    template: `
        <app-edition-layout [title]="'Add category'" [formGroup]="form" (save)="save()">
            <app-category-fields></app-category-fields>
        </app-edition-layout>
    `,
})
export class AddCategoryFormComponent {
    readonly form: FormGroup<any>;

    constructor(private categoryService: CategoryService, private router: Router, private route: ActivatedRoute) {
        this.form = new FormGroup({
            category: new FormControl(null, Validators.required),
        });
    }

    save(): void {
        this.form.updateValueAndValidity();
        this.form.markAllAsTouched();
        if (this.form.valid) {
            this.categoryService.create(this.form.value['category']);
            this.router.navigate(['../'], { relativeTo: this.route });
        }
    }
}
