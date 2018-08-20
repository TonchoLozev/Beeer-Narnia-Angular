import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';
import {throwError} from 'rxjs';
import {authHelper} from "../helpers/auth";

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  addRoleUrl = 'https://baas.kinvey.com/rpc/kid_rkgjslEzX/custom/addRole';
  removeRoleUrl = 'https://baas.kinvey.com/rpc/kid_rkgjslEzX/custom/deleteRole';

  constructor(private http: HttpClient) {
  }

  makeRegularUser(userId): Observable<any>{

    if (arguments.length < 1 || arguments.length > 1 || typeof (userId) !== 'string') {
      throw new Error('Invalid number of arguments or arguments are from different type');
    }

    const bodyString = JSON.stringify({userid: userId, roleid: '2b8b07ed-17cb-4737-9361-878e69250df0'});
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authHelper.makeAuth('kinvey')
    });

    return this.http.post(this.addRoleUrl, bodyString, {headers: headers})
      .map((res: Response) => {
        return res;
      })
      .catch((error: any) => throwError(error || 'Server error'));
  }

  removeRegularRole(userId): Observable<any> {

    if (arguments.length < 1 || arguments.length > 1 || typeof (userId) !== 'string') {
      throw new Error('Invalid number of arguments or arguments are from different type');
    }

    const bodyString = JSON.stringify({userid: userId, roleid: '2b8b07ed-17cb-4737-9361-878e69250df0'});
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authHelper.makeAuth('kinvey')
    });

    return this.http.post(this.removeRoleUrl, bodyString, {headers: headers})
      .map((res: Response) => {
        return res;
      })
      .catch((error: any) => throwError(error || 'Server error'));
  }

  makeAdminUser(userId) {

    if (arguments.length < 1 || arguments.length > 1 || typeof (userId) !== 'string') {
      throw new Error('Invalid number of arguments or arguments are from different type');
    }

    const bodyString = JSON.stringify({userid: userId, roleid: '40e731c1-824f-485b-8d98-ffb30d85b6a9'});
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authHelper.makeAuth('kinvey')
    });

    this.removeRegularRole(userId).subscribe(userInfo => {
      return this.http.post(this.addRoleUrl, bodyString, {headers: headers})
        .map((res: Response) => {
          return res;
        })
        .catch((error: any) => throwError(error || 'Server error'));
    }, err => {
      console.log(err)
    });
  }
}
