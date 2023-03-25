import { Component } from '@angular/core';

@Component({
    selector: 'app-remove-pane',
    template: `<button type="button" class="remove-btn" (click)="removeHandler()">Remove</button>`,
    host: {
        class: 'remove-pane',
    },
})
export class RemovePaneComponent {
    removeHandler() {}
}
