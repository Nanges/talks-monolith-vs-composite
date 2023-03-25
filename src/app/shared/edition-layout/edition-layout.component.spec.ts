import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionLayoutComponent } from './edition-layout.component';

describe('EditionLayoutComponent', () => {
  let component: EditionLayoutComponent;
  let fixture: ComponentFixture<EditionLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditionLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
