import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePetFormComponent } from './update-pet-form.component';

describe('UpdatePetFormComponent', () => {
  let component: UpdatePetFormComponent;
  let fixture: ComponentFixture<UpdatePetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePetFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
