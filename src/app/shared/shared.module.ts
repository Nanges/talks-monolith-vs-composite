import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditionLayoutComponent } from './edition-layout/edition-layout.component';
import { RemovePaneComponent } from './remove-pane/remove-pane.component';

@NgModule({
    declarations: [EditionLayoutComponent, RemovePaneComponent],
    imports: [CommonModule, ReactiveFormsModule, RouterModule],
    exports: [EditionLayoutComponent, RemovePaneComponent],
})
export class SharedModule {}
