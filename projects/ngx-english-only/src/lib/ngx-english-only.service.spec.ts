import { TestBed } from '@angular/core/testing';

import { NgxEnglishOnlyService } from './ngx-english-only.service';

describe('NgxEnglishOnlyService', () => {
  let service: NgxEnglishOnlyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxEnglishOnlyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
