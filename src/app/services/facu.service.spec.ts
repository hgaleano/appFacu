import { TestBed } from '@angular/core/testing';

import { FacuService } from './facu.service';

describe('FacuService', () => {
  let service: FacuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
