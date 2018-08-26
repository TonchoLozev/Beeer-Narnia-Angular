import { TestBed, inject } from '@angular/core/testing';

import { AuthGuargAdminUserService } from './auth-guarg-admin-user.service';

describe('AuthGuargAdminUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuargAdminUserService]
    });
  });

  it('should be created', inject([AuthGuargAdminUserService], (service: AuthGuargAdminUserService) => {
    expect(service).toBeTruthy();
  }));
});
