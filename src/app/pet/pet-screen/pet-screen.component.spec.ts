import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetScreenComponent } from './pet-screen.component';

describe('PetScreenComponent', () => {
  let component: PetScreenComponent;
  let fixture: ComponentFixture<PetScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
