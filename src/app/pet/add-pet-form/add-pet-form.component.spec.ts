import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPetFormComponent } from './add-pet-form.component';

describe('AddPetFormComponent', () => {
  let component: AddPetFormComponent;
  let fixture: ComponentFixture<AddPetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPetFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
