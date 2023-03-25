import { forwardRef, InjectionToken, Provider, Type } from '@angular/core';

export interface RemoveCapability {
    removeHandler(): void;
}

export const REMOVE_CAPABILITY = new InjectionToken<RemoveCapability>('Remove capability object');

export function provideRemoveCapability(ctor: Type<any>): Provider {
    return {
        provide: REMOVE_CAPABILITY,
        useExisting: forwardRef(() => ctor),
    };
}
