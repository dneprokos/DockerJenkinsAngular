import { TestBed } from '@angular/core/testing';

import { GlobalEventsManagerService } from './global-events-manager.service';

describe('GlobalEventsManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalEventsManagerService = TestBed.get(GlobalEventsManagerService);
    expect(service).toBeTruthy();
  });
});
