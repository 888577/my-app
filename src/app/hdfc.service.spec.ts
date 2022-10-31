import { TestBed } from '@angular/core/testing';

import { HdfcService } from './hdfc.service';

describe('HdfcService', () => {
  let service: HdfcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HdfcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
