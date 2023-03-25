import { FormControl, FormGroup } from '@angular/forms';
import { SaveCapability } from './shared/edition-layout/save-capability';

export abstract class BaseCategoryForm implements SaveCapability {
    readonly form: FormGroup<any>;

    constructor() {
        this.form = new FormGroup({
            category: new FormControl(),
        });
    }

    abstract saveHandler(): void;
}
