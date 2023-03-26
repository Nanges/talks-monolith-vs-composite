import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetFieldsComponent } from './pet-fields.component';

describe('PetFieldsComponent', () => {
  let component: PetFieldsComponent;
  let fixture: ComponentFixture<PetFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetFieldsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
