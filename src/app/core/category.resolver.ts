import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryService } from './category.service';

@Injectable({
    providedIn: 'root',
})
export class CategoryResolver implements Resolve<string> {
    /**
     *
     */
    constructor(private categoryService: CategoryService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<string> {
        const id = Number(route.paramMap.get('id'));
        return this.categoryService.getCategory(id);
    }
}
