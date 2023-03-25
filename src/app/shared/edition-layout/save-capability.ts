import { forwardRef, InjectionToken, Provider, Type } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface FormHost {
    readonly form: FormGroup;
}

export interface SaveCapability extends FormHost {
    saveHandler(): void;
}

export const SAVE_CAPABILITY = new InjectionToken<SaveCapability>('Save capability object');

export function provideSaveCapability(ctor: Type<any>): Provider {
    return {
        provide: SAVE_CAPABILITY,
        useExisting: forwardRef(() => ctor),
    };
}
