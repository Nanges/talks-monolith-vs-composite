import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditionLayoutIoDirective } from './edition-layout-io.directive';
import { EditionLayoutWithRedirectDirective } from './edition-layout-with-redirect.directive';
import { EditionLayoutComponent } from './edition-layout/edition-layout.component';
import { RemovePaneComponent } from './remove-pane/remove-pane.component';

@NgModule({
    declarations: [EditionLayoutComponent, RemovePaneComponent, EditionLayoutIoDirective, EditionLayoutWithRedirectDirective],
    imports: [CommonModule, ReactiveFormsModule, RouterModule],
    exports: [EditionLayoutComponent, RemovePaneComponent, EditionLayoutIoDirective, EditionLayoutWithRedirectDirective],
})
export class SharedModule {}
