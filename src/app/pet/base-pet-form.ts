import { FormControl, FormGroup } from '@angular/forms';
import { SaveCapability } from '../shared/edition-layout/save-capability';

export abstract class BasePetForm implements SaveCapability {
    readonly form: FormGroup<any>;

    constructor() {
        this.form = new FormGroup({
            name: new FormControl(),
            category: new FormControl(),
        });
    }

    abstract saveHandler(): void;
}
