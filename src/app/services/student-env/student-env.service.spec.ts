import { TestBed } from '@angular/core/testing';

import { StudentEnvService } from './student-env.service';

describe('StudentEnvService', () => {
  let service: StudentEnvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentEnvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
