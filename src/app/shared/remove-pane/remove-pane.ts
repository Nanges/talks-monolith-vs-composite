import { InjectionToken } from '@angular/core';

export interface RemovePane {
    removeHandler(): void;
}

export const REMOVE_PANE_DECORATED = new InjectionToken<RemovePane>('Decorated by RemovePane');
