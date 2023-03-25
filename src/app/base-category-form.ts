import { FormControl, FormGroup } from '@angular/forms';
import { EditionLayout } from './shared/edition-layout/edition-layout';

export abstract class BaseCategoryForm implements EditionLayout {
    readonly form: FormGroup<any>;

    constructor() {
        this.form = new FormGroup({
            category: new FormControl(),
        });
    }

    abstract saveHandler(): void;
}
