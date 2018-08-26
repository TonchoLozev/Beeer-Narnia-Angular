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
export class RequestsService {

  constructor(private http: HttpClient) {
  }

  getAllRequests() {
    const getRequestsUrl = 'https://baas.kinvey.com/appdata/kid_rkgjslEzX/request-access?query={}&sort={"_kmd.ect": -1}';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authHelper.makeAuth('kinvey')
    });

    return this.http.get(getRequestsUrl, {headers: headers})
      .map((res) => {
        return res;
      })
      .catch((error: any) => throwError(error || 'Server error'));
  }

  sendRequest(request) {
    const userId = sessionStorage.getItem('userId');
    const username = sessionStorage.getItem('username');

    const sendRequestUrl = 'https://baas.kinvey.com/appdata/kid_rkgjslEzX/request-access';

    const bodyString = JSON.stringify({
      userId: userId,
      username: username,
      firstname: request.firstname,
      lastname: request.lastname,
      reason: request.reason
    });

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authHelper.makeAuth('kinvey')
    });

    return this.http.post(sendRequestUrl, bodyString, {headers: headers})
      .map((res) => {
        return res;
      })
      .catch((error: any) => throwError(error || 'Server error'));
  }

  deleteRequest(requestId) {
    const deleteRequestUrl = 'https://baas.kinvey.com/appdata/kid_rkgjslEzX/request-access/' + requestId;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authHelper.makeAuth('kinvey')
    });

    return this.http.delete(deleteRequestUrl, {headers: headers})
      .map((res) => {
        return res;
      })
      .catch((error: any) => throwError(error || 'Server error'));
  }
}
