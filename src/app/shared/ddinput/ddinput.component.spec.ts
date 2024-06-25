import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DDInputComponent } from './ddinput.component';

describe('DDInputComponent', () => {
  let component: DDInputComponent;
  let fixture: ComponentFixture<DDInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DDInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DDInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
