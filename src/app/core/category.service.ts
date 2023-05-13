import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CategoryService {
    private _data: string[] = ['dog', 'cat', 'fish', 'other'];

    constructor() {}

    getCategories() {
        return of(this._data);
    }

    getCategory(index: number) {
        return this._data[index] ? of(this._data[index]) : throwError(() => new Error('Category not found'));
    }

    create(category: string) {
        return of(this._data.push(category) - 1);
    }

    update(index: number, category: string) {
        this._data[index] = category;
        return of(null);
    }

    remove(index: number) {
        this._data.splice(index, 1);
        return of(null);
    }
}
