import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCreateUpdateComponent } from './student-cu.component';

describe('StudentComponent', () => {
  let component: StudentCreateUpdateComponent;
  let fixture: ComponentFixture<StudentCreateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentCreateUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
