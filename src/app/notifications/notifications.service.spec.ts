import { TestBed } from '@angular/core/testing';

import { TwitterNotificationsService } from './twitter-notifications.service';

describe('NotificationsService', () => {
  let service: TwitterNotificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwitterNotificationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
