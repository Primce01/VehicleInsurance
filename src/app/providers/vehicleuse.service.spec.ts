import { TestBed } from '@angular/core/testing';

import { VehicleuseService } from './vehicleuse.service';

describe('VehicleuseService', () => {
  let service: VehicleuseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleuseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
