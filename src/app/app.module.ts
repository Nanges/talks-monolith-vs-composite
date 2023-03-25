import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryScreenComponent } from './category-screen/category-screen.component';
import { EditionLayoutComponent } from './shared/edition-layout/edition-layout.component';
import { RemovePaneComponent } from './shared/remove-pane/remove-pane.component';
import { AddCategoryFormComponent } from './add-category-form/add-category-form.component';
import { UpdateCategoryFormComponent } from './update-category-form/update-category-form.component';
import { CategoryFieldsComponent } from './category-fields/category-fields.component';

@NgModule({
    declarations: [AppComponent, CategoryListComponent, CategoryFormComponent, CategoryScreenComponent, EditionLayoutComponent, RemovePaneComponent, AddCategoryFormComponent, UpdateCategoryFormComponent, CategoryFieldsComponent],
    imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
