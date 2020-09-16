import { TestBed } from '@angular/core/testing';

import { StateProviderService } from './state-provider.service';

describe('StateProviderService', () => {
  let service: StateProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
