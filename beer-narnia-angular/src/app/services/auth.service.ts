import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';
import {throwError} from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {authHelper} from '../helpers/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUrl = 'https://baas.kinvey.com/user/kid_rkgjslEzX/login';
  registerUrl = 'https://baas.kinvey.com/user/kid_rkgjslEzX/';

  constructor(private http: HttpClient) {
  }

  login(username, password): Observable<any> {

    if (arguments.length < 2 || arguments.length > 2 || typeof (username) !== 'string' || typeof (password) !== 'string') {
      throw new Error('Invalid number of arguments or arguments are from different type');
    }

    const bodyString = JSON.stringify({username: username, password: password});
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authHelper.makeAuth('basic')
    });

    return this.http.post(this.loginUrl, bodyString, {headers: headers})
      .map((res) => {
        return res;
      })
      .catch((error: any) => throwError(error || 'Server error'));
  }

  register(username, email, password): Observable<any> {

    if (arguments.length < 3 || arguments.length > 3 || typeof (username) !== 'string' || typeof (password) !== 'string' || typeof (email) !== 'string') {
      throw new Error('Invalid number of arguments or arguments are from different type');
    }

    const bodyString = JSON.stringify({username: username, email: email, password: password});
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authHelper.makeAuth('basic')
    });

    return this.http.post(this.registerUrl, bodyString, {headers: headers})
      .map((res) => {
        return res;
      })
      .catch((error: any) => throwError(error || 'Server error'));
  }
}
