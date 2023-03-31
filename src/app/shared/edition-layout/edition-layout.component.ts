import { Component, Inject } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { SaveCapability, SAVE_CAPABILITY } from './save-capability';

@Component({
    selector: 'app-edition-layout',
    templateUrl: './edition-layout.component.html',
    host: { class: 'block' },
})
export class EditionLayoutComponent {
    get title() {
        return this.decorated.title;
    }

    get form() {
        return this.formGroup.control;
    }

    constructor(
        @Inject(SAVE_CAPABILITY) private decorated: SaveCapability,
        private router: Router,
        private formGroup: FormGroupDirective
    ) {}

    saveHandler() {
        this.decorated.saveHandler();
        this.router.navigateByUrl('../');
    }
}
