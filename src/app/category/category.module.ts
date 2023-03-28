import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryScreenComponent } from './category-screen/category-screen.component';

@NgModule({
    declarations: [CategoryScreenComponent, CategoryListComponent, CategoryFormComponent],
    imports: [CommonModule, CategoryRoutingModule, ReactiveFormsModule],
})
export class CategoryModule {}
