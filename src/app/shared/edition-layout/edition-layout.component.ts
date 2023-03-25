import { Component, Inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EditionLayout, EDITION_LAYOUT_DECORATED } from './edition-layout';

@Component({
    selector: 'app-edition-layout',
    templateUrl: './edition-layout.component.html',
    host: { class: 'block' },
})
export class EditionLayoutComponent implements EditionLayout {
    @Input() title!: string;

    get form() {
        return this.decorated.form;
    }

    constructor(@Inject(EDITION_LAYOUT_DECORATED) private decorated: EditionLayout, private router: Router) {}

    saveHandler() {
        this.decorated.saveHandler();
        this.router.navigateByUrl('../');
    }
}
