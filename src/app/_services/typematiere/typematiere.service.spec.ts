import { TestBed } from '@angular/core/testing';

import { TypematiereService } from './typematiere.service';

describe('TypematiereService', () => {
  let service: TypematiereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypematiereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
