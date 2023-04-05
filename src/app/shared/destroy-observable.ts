import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * ```ts
 * // installation
 * import { DestroyObservable } from '@actiris/forms';
 * ```
 */
@Injectable()
export class DestroyObservable extends Subject<void> implements OnDestroy {
    ngOnDestroy(): void {
        this.next();
    }
}
