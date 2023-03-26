import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { CategoryService } from './category.service';

@Injectable({
    providedIn: 'root',
})
export class CategoryResolver implements Resolve<string> {
    /**
     *
     */
    constructor(private categoryService: CategoryService) {}

    resolve(route: ActivatedRouteSnapshot): string {
        const category = this.categoryService.data[Number(route.paramMap.get('id'))];
        if (category !== undefined) {
            return category;
        }

        throw new Error('Category not found');
    }
}
