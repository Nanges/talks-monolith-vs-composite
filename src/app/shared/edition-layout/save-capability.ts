import { forwardRef, InjectionToken, Provider, Type } from '@angular/core';

export interface SaveCapability {
    title: string;
    saveHandler(): void;
}

export const SAVE_CAPABILITY = new InjectionToken<SaveCapability>('Save capability object');

export function provideSaveCapability(ctor: Type<SaveCapability>): Provider {
    return {
        provide: SAVE_CAPABILITY,
        useExisting: forwardRef(() => ctor),
    };
}
