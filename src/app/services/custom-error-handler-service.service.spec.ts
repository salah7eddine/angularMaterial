import { TestBed } from '@angular/core/testing';

import { CustomErrorHandlerServiceService } from './custom-error-handler-service.service';

describe('CustomErrorHandlerServiceService', () => {
  let service: CustomErrorHandlerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomErrorHandlerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
