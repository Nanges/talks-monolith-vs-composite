import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../pet.service';

@Component({
    selector: 'app-pet-form',
    templateUrl: './pet-form.component.html',
})
export class PetFormComponent {
    readonly index: number;
    readonly creationMode: boolean;
    readonly form: FormGroup;

    constructor(route: ActivatedRoute, private petService: PetService, private router: Router) {
        this.form = this.buildForm();
        this.index = Number(route.snapshot.paramMap.get('id'));
        const category = route.snapshot.data['category'];

        if (category === undefined) {
            // creation mode
            this.creationMode = true;
        } else {
            // edition mode
            this.creationMode = false;
            this.form.setValue({
                category,
            });
        }
    }

    saveHandler() {
        this.creationMode ? this.createHandler() : this.updateHandler();
    }

    removeHandler() {
        if (confirm('Are you sure ?')) {
            this.petService.remove(this.index);
            this.router.navigate(['categories']);
        }
    }

    private createHandler() {
        this.petService.create(this.form.value['category']);
        this.router.navigate(['categories']);
    }

    private updateHandler() {
        this.petService.update(this.index, this.form.value['category']);
        this.router.navigate(['categories']);
    }

    private buildForm() {
        return new FormGroup({
            category: new FormControl(),
        });
    }
}
