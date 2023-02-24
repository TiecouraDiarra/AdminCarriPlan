import { TestBed } from '@angular/core/testing';

import { AutoevaluationService } from './autoevaluation.service';

describe('AutoevaluationService', () => {
  let service: AutoevaluationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoevaluationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
