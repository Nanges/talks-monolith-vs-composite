import { InjectionToken } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface FormHost {
    readonly form: FormGroup;
}

export interface SaveCapability extends FormHost {
    saveHandler(): void;
}

export const SAVE_CAPABILITY = new InjectionToken<SaveCapability>('Save capability object');
