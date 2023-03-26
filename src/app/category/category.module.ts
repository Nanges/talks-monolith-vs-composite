import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AddCategoryFormComponent } from './add-category-form/add-category-form.component';
import { CategoryFieldsComponent } from './category-fields/category-fields.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryScreenComponent } from './category-screen/category-screen.component';
import { UpdateCategoryFormComponent } from './update-category-form/update-category-form.component';

@NgModule({
    declarations: [
        CategoryListComponent,
        CategoryScreenComponent,
        CategoryFieldsComponent,
        AddCategoryFormComponent,
        UpdateCategoryFormComponent,
    ],
    imports: [CommonModule, ReactiveFormsModule, SharedModule, CategoryRoutingModule],
})
export class CategoryModule {}
