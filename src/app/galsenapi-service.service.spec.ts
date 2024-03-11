import { TestBed } from '@angular/core/testing';

import { GalsenapiServiceService } from './galsenapi-service.service';

describe('GalsenapiServiceService', () => {
  let service: GalsenapiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalsenapiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
