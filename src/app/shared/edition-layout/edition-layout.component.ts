import { Component, Inject, Input, Self } from '@angular/core';
import { SaveCapability, SAVE_CAPABILITY } from './save-capability';

@Component({
    selector: 'app-edition-layout',
    templateUrl: './edition-layout.component.html',
    host: { class: 'block' },
})
export class EditionLayoutComponent {
    @Input() title!: string;
    constructor(@Self() @Inject(SAVE_CAPABILITY) readonly saveCapabilityDirective: SaveCapability) {}
}
