import { TestBed } from '@angular/core/testing';

import { ChartjsserviceService } from './chartjsservice.service';

describe('ChartjsserviceService', () => {
  let service: ChartjsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartjsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
