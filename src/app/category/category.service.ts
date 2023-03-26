import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CategoryService {
    private _data: string[] = ['foo', 'bar', 'baz'];
    get data() {
        return this._data;
    }

    constructor() {}

    create(category: string) {
        this._data.push(category);
    }

    update(index: number, category: string) {
        this._data[index] = category;
    }

    remove(index: number) {
        this._data.splice(index, 1);
    }
}
