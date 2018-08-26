import { Injectable } from '@angular/core';
import {Router, CanActivate} from '@angular/router';

import {authHelper} from '../helpers/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthGuargAdminUserService {

  constructor(public router: Router) { }

  canActivate(): boolean {
    if (!authHelper.isAuth() || !authHelper.isAdmin()) {
      this.router.navigateByUrl('home');
      return false;
    }
    return true;
  }
}
