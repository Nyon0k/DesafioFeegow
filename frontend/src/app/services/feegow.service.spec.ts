import { TestBed } from '@angular/core/testing';

import { FeegowService } from './feegow.service';

describe('FeegowService', () => {
  let service: FeegowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeegowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
