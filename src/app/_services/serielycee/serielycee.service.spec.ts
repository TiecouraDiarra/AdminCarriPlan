import { TestBed } from '@angular/core/testing';

import { SerielyceeService } from './serielycee.service';

describe('SerielyceeService', () => {
  let service: SerielyceeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerielyceeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
