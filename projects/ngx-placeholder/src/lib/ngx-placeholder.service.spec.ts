import { TestBed } from '@angular/core/testing';

import { NgxPlaceholderService } from './ngx-placeholder.service';

describe('NgxPlaceholderService', () => {
  let service: NgxPlaceholderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPlaceholderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
