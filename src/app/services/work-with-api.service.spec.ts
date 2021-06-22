import { TestBed } from '@angular/core/testing';

import { WorkWithApiService } from './work-with-api.service';

describe('WorkWithApiService', () => {
  let service: WorkWithApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkWithApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
