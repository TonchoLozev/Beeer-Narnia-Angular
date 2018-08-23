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
export class BeersService {

  private getAllBeersUrl = 'https://baas.kinvey.com/appdata/kid_rkgjslEzX/beers?query={}&sort={"_kmd.ect": -1}';

  constructor(private http: HttpClient) {
  }

  getAllBeers() {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authHelper.makeAuth('kinvey')
    });

    return this.http.get(this.getAllBeersUrl, {headers: headers})
      .map((res) => {
        return res;
      })
      .catch((error: any) => throwError(error || 'Server error'));
  }

  getBeer(id) {
    const getBeerUrl = 'https://baas.kinvey.com/appdata/kid_rkgjslEzX/beers/' + id;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authHelper.makeAuth('kinvey')
    });

    return this.http.get(getBeerUrl, {headers: headers})
      .map((res) => {
        return res;
      })
      .catch((error: any) => throwError(error || 'Server error'));
  }
}
