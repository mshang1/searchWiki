import { TestBed } from '@angular/core/testing';

import { SearchgiphyService } from './searchgiphy.service';

describe('DashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchgiphyService = TestBed.get(SearchgiphyService);
    expect(service).toBeTruthy();
  });
});