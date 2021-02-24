import { TestBed } from '@angular/core/testing';

import { InsurancefreqService } from './insurancefreq.service';

describe('InsurancefreqService', () => {
  let service: InsurancefreqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsurancefreqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
