import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../category/category.service';
import { PetService } from '../pet.service';

@Component({
    selector: 'app-pet-form',
    templateUrl: './pet-form.component.html',
})
export class PetFormComponent {
    readonly index: number;
    readonly creationMode: boolean;
    readonly form: FormGroup;

    get categories() {
        return this.categoryService.data;
    }

    constructor(route: ActivatedRoute, private petService: PetService, private router: Router, private categoryService: CategoryService) {
        this.form = this.buildForm();
        this.index = Number(route.snapshot.paramMap.get('id'));
        const pet = route.snapshot.data['pet'];

        if (pet === undefined) {
            // creation mode
            this.creationMode = true;
        } else {
            // edition mode
            this.creationMode = false;
            this.form.setValue(pet);
        }
    }

    saveHandler() {
        this.creationMode ? this.createHandler() : this.updateHandler();
    }

    removeHandler() {
        if (confirm('Are you sure ?')) {
            this.petService.remove(this.index);
            this.router.navigate(['pets']);
        }
    }

    private createHandler() {
        this.petService.create(this.form.value);
        this.router.navigate(['pets']);
    }

    private updateHandler() {
        this.petService.update(this.index, this.form.value);
        this.router.navigate(['pets']);
    }

    private buildForm() {
        return new FormGroup({
            name: new FormControl(),
            category: new FormControl(),
        });
    }
}
