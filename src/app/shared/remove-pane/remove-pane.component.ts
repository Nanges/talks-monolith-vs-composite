import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { RemoveCapability, REMOVE_CAPABILITY } from './remove-capability';

@Component({
    selector: 'app-remove-pane',
    template: `<button type="button" class="remove-btn" (click)="removeHandler()">Remove</button>`,
    host: {
        class: 'remove-pane',
    },
})
export class RemovePaneComponent implements RemoveCapability {
    /**
     *
     */
    constructor(@Inject(REMOVE_CAPABILITY) private decorated: RemoveCapability, private router: Router) {}

    removeHandler() {
        if (confirm('Are you sure ?')) {
            this.decorated.removeHandler();
            this.router.navigateByUrl('../');
        }
    }
}
