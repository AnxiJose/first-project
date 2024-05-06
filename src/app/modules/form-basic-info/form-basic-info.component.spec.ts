import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBasicInfoComponent } from './form-basic-info.component';

describe('FormBasicInfoComponent', () => {
  let component: FormBasicInfoComponent;
  let fixture: ComponentFixture<FormBasicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormBasicInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
