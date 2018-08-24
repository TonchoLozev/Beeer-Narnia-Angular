import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {throwError} from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {authHelper} from '../helpers/auth';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  constructor(private http: HttpClient) {
  }

  getAllBeers() {
    const getAllBeersUrl = 'https://baas.kinvey.com/appdata/kid_rkgjslEzX/beers?query={}&sort={"_kmd.ect": -1}';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authHelper.makeAuth('kinvey')
    });

    return this.http.get(getAllBeersUrl, {headers: headers})
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

  editBeer(beer) {
    const editBeerUrl = 'https://baas.kinvey.com/appdata/kid_rkgjslEzX/beers/' + beer._id;
    const bodyString = JSON.stringify({
      name: beer.name,
      type: beer.type,
      price: beer.price,
      description: beer.description,
      country: beer.country,
      img: beer.img
    });

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authHelper.makeAuth('kinvey')
    });

    return this.http.put(editBeerUrl, bodyString, {headers: headers})
      .map((res) => {
        return res;
      })
      .catch((error: any) => throwError(error || 'Server error'));
  }

  deleteBeer(id){
    const editBeerUrl = 'https://baas.kinvey.com/appdata/kid_rkgjslEzX/beers/' + id;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authHelper.makeAuth('kinvey')
    });

    return this.http.delete(editBeerUrl, {headers: headers})
      .map((res) => {
        return res;
      })
      .catch((error: any) => throwError(error || 'Server error'));
  }
}
