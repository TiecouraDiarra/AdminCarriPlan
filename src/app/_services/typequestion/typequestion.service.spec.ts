import { TestBed } from '@angular/core/testing';

import { TypequestionService } from './typequestion.service';

describe('TypequestionService', () => {
  let service: TypequestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypequestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
