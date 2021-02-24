import { TestBed } from '@angular/core/testing';

import { InsurancetypeService } from './insurancetype.service';

describe('InsurancetypeService', () => {
  let service: InsurancetypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsurancetypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
