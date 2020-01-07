import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputValidatorComponent } from './form-input-validator.component';

describe('FormInputValidatorComponent', () => {
  let component: FormInputValidatorComponent;
  let fixture: ComponentFixture<FormInputValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInputValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
