import { InjectionToken } from '@angular/core';

export interface RemoveCapability {
    removeHandler(): void;
}

export const REMOVE_CAPABILITY = new InjectionToken<RemoveCapability>('Remove capability object');
