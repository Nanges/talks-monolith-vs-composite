import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from '../../core/category.service';

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
})
export class CategoryListComponent {
    readonly data$: Observable<string[]>;

    constructor(private categoryService: CategoryService) {
        this.data$ = this.categoryService.getCategories();
    }
}
