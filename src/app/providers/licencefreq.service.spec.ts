import { TestBed } from '@angular/core/testing';

import { LicencefreqService } from './licencefreq.service';

describe('LicencefreqService', () => {
  let service: LicencefreqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LicencefreqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
