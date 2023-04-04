import { Directive, forwardRef, Inject, SkipSelf } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SaveCapability, SAVE_CAPABILITY } from './edition-layout/save-capability';

@Directive({
    selector: 'app-edition-layout[withRedirect]',
    providers: [
        {
            provide: SAVE_CAPABILITY,
            useExisting: forwardRef(() => EditionLayoutWithRedirectDirective),
        },
    ],
})
export class EditionLayoutWithRedirectDirective implements SaveCapability {
    constructor(
        // Component with business logic only
        @SkipSelf() @Inject(SAVE_CAPABILITY) private hostComponent: SaveCapability,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    saveHandler(): void {
        this.hostComponent.saveHandler();
        this.router.navigate(['..'], { relativeTo: this.route });
    }

    get form() {
        return this.hostComponent.form;
    }
}
