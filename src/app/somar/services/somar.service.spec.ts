import { TestBed } from '@angular/core/testing';

import { SomarService } from './somar.service';

describe('SomarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SomarService = TestBed.get(SomarService);
    expect(service).toBeTruthy();
  });
});
