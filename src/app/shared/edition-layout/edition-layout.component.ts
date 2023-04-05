import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Component({
    selector: 'app-edition-layout',
    templateUrl: './edition-layout.component.html',
    host: { class: 'block' },
})
export class EditionLayoutComponent {
    @Input() title!: string;
    @Output() save = new EventEmitter();

    get form() {
        return this.formGroupDirective.form;
    }

    constructor(private formGroupDirective: FormGroupDirective) {}
}
