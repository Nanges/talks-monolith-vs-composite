import { Directive, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SaveCapability, SAVE_CAPABILITY } from './edition-layout/save-capability';

/**
 * Provide input and output to app-edition-layout for full customization
 */
@Directive({
    selector: 'app-edition-layout[io]',
    providers: [
        {
            provide: SAVE_CAPABILITY,
            useExisting: forwardRef(() => EditionLayoutIoDirective),
        },
    ],
})
export class EditionLayoutIoDirective implements SaveCapability {
    @Input()
    form!: FormGroup<any>;

    @Output()
    save = new EventEmitter<any>();

    constructor() {}

    saveHandler(): void {
        this.save.emit(this.form.value);
    }
}
