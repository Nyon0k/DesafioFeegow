import { TestBed } from '@angular/core/testing';

import { BacklocalService } from './backlocal.service';

describe('BacklocalService', () => {
  let service: BacklocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BacklocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
