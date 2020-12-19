import { TestBed } from '@angular/core/testing';

import { PwingeiService } from './pwingei.service';

describe('PwingeiService', () => {
  let service: PwingeiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PwingeiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
