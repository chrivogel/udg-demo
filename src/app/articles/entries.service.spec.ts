import { TestBed } from '@angular/core/testing';

import { EntriesService } from './entries.service';

describe('ArticlesService', () => {
  let service: EntriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
