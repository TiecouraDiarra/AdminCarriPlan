import { TestBed } from '@angular/core/testing';

import { DomaineprofeService } from './domaineprofe.service';

describe('DomaineprofeService', () => {
  let service: DomaineprofeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomaineprofeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
