import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComp1Component } from './form-comp1.component';

describe('FormComp1Component', () => {
  let component: FormComp1Component;
  let fixture: ComponentFixture<FormComp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
