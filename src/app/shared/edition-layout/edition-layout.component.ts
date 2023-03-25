import { Component, Inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SaveCapability, SAVE_CAPABILITY } from './save-capability';

@Component({
    selector: 'app-edition-layout',
    templateUrl: './edition-layout.component.html',
    host: { class: 'block' },
})
export class EditionLayoutComponent implements SaveCapability {
    @Input() title!: string;

    get form() {
        return this.decorated.form;
    }

    constructor(@Inject(SAVE_CAPABILITY) private decorated: SaveCapability, private router: Router) {}

    saveHandler() {
        this.decorated.saveHandler();
        this.router.navigateByUrl('../');
    }
}
