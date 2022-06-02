import { TestBed } from '@angular/core/testing';

import { NpxStorageService } from './npx-storage.service';

describe('NpxStorageService', () => {
  let service: NpxStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NpxStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
