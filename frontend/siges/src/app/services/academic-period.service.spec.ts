import { TestBed } from '@angular/core/testing';

import { AcademicPeriodService } from './academic-period.service';

describe('AcademicPeriodService', () => {
  let service: AcademicPeriodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcademicPeriodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
