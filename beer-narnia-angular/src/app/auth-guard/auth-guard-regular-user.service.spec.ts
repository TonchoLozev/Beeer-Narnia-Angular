import { TestBed, inject } from '@angular/core/testing';

import { AuthGuardRegularUserService } from './auth-guard-regular-user.service';

describe('AuthGuardRegularUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardRegularUserService]
    });
  });

  it('should be created', inject([AuthGuardRegularUserService], (service: AuthGuardRegularUserService) => {
    expect(service).toBeTruthy();
  }));
});
