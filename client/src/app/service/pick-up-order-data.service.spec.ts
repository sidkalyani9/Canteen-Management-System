import { TestBed } from '@angular/core/testing';

import { PickUpOrderDataService } from './pick-up-order-data.service';

describe('PickUpOrderDataService', () => {
  let service: PickUpOrderDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PickUpOrderDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
