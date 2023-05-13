import { Component } from '@angular/core';
import { CategoryService } from '../../core/category.service';

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
})
export class CategoryListComponent {
    get data() {
        return this.categoryService.data;
    }

    constructor(private categoryService: CategoryService) {}
}
