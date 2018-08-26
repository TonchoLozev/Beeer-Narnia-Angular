import { Injectable } from '@angular/core';
import {Router, CanActivate} from '@angular/router';

import {authHelper} from '../helpers/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public router: Router) { }

  canActivate(): boolean {
    if (!authHelper.isAuth()) {
      this.router.navigateByUrl('login');
      return false;
    }
    return true;
  }
}
