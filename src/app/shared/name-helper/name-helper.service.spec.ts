import { TestBed } from '@angular/core/testing';

import { NameHelperService } from './name-helper.service';

describe('NameHelperService', () => {
  let service: NameHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NameHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
