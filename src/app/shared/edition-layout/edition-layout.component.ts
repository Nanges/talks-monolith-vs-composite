import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-edition-layout',
    templateUrl: './edition-layout.component.html',
    styleUrls: ['./edition-layout.component.scss'],
})
export class EditionLayoutComponent {
    readonly form: FormGroup;
    @Input() title!: string;

    readonly hasRemoveCapability: boolean = false;

    constructor() {
        this.form = new FormGroup({});
    }

    saveHandler() {}
}
