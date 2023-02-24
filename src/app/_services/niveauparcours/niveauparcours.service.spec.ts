import { TestBed } from '@angular/core/testing';

import { NiveauparcoursService } from './niveauparcours.service';

describe('NiveauparcoursService', () => {
  let service: NiveauparcoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NiveauparcoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
