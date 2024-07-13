import { TestBed } from '@angular/core/testing';

import { MargaritaserviceService } from './margaritaservice.service';

describe('MargaritaserviceService', () => {
  let service: MargaritaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MargaritaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
