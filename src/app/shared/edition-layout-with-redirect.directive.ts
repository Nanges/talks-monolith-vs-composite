import { Directive, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, takeUntil, tap } from 'rxjs';
import { DestroyObservable } from './destroy-observable';
import { EditionLayoutComponent } from './edition-layout/edition-layout.component';

@Directive({
    selector: 'app-edition-layout[withRedirect]',
    providers: [DestroyObservable],
})
export class EditionLayoutWithRedirectDirective implements OnInit {
    @Input()
    saveHandler!: () => void;

    private get form() {
        return this.editionLayout.form;
    }

    constructor(
        // Component with business logic only
        private editionLayout: EditionLayoutComponent,
        private router: Router,
        private route: ActivatedRoute,
        private isDestroyed: DestroyObservable
    ) {}

    ngOnInit(): void {
        this.editionLayout.save
            .pipe(
                tap(() => {
                    this.form.updateValueAndValidity();
                    this.form.markAllAsTouched();
                }),
                filter(() => this.form.valid),
                tap(this.saveHandler),
                takeUntil(this.isDestroyed)
            )
            .subscribe(() => {
                this.router.navigate(['..'], { relativeTo: this.route });
            });
    }
}
