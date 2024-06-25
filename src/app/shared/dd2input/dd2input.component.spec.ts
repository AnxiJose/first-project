import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DD2inputComponent } from './dd2input.component';

describe('DD2inputComponent', () => {
  let component: DD2inputComponent;
  let fixture: ComponentFixture<DD2inputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DD2inputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DD2inputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
