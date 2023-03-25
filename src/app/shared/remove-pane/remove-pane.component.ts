import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { RemovePane, REMOVE_PANE_DECORATED } from './remove-pane';

@Component({
    selector: 'app-remove-pane',
    template: `<button type="button" class="remove-btn" (click)="removeHandler()">Remove</button>`,
    host: {
        class: 'remove-pane',
    },
})
export class RemovePaneComponent implements RemovePane {
    /**
     *
     */
    constructor(@Inject(REMOVE_PANE_DECORATED) private decorated: RemovePane, private router: Router) {}

    removeHandler() {
        if (confirm('Are you sure ?')) {
            this.decorated.removeHandler();
            this.router.navigateByUrl('../');
        }
    }
}
