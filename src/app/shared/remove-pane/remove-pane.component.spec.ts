import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovePaneComponent } from './remove-pane.component';

describe('RemovePaneComponent', () => {
  let component: RemovePaneComponent;
  let fixture: ComponentFixture<RemovePaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovePaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemovePaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
