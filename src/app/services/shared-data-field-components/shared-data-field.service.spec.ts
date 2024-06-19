import { TestBed } from '@angular/core/testing';

import { SharedDataFieldService } from './shared-data-field.service';

describe('SharedDataFieldService', () => {
  let service: SharedDataFieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedDataFieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
