import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFieldsComponent } from './category-fields.component';

describe('CategoryFieldsComponent', () => {
  let component: CategoryFieldsComponent;
  let fixture: ComponentFixture<CategoryFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryFieldsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
