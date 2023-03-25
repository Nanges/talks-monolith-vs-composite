import { InjectionToken } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface FormHost {
    readonly form: FormGroup;
}

export interface EditionLayout extends FormHost {
    saveHandler(): void;
}

export const EDITION_LAYOUT_DECORATED = new InjectionToken<EditionLayout>('Decorated by EditionLayout');
