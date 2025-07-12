import { TestBed } from '@angular/core/testing';

import { ServiceChat } from './service-chat';

describe('ServiceChat', () => {
  let service: ServiceChat;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceChat);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
