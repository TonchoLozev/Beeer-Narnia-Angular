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
export class CommentsService {

  constructor(private http: HttpClient) {
  }

  getComments(beerId) {

    const getCommentsUrl = `https://baas.kinvey.com/appdata/kid_rkgjslEzX/comments?query={"beerId":"${beerId}"}&sort={"_kmd.ect": -1}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authHelper.makeAuth('kinvey')
    });

    return this.http.get(getCommentsUrl, {headers: headers})
      .map((res) => {
        return res;
      })
      .catch((error: any) => throwError(error || 'Server error'));
  }

  postComment(beerId, content, author) {
    const postCommentsUrl = 'https://baas.kinvey.com/appdata/kid_rkgjslEzX/comments';
    const bodyString = JSON.stringify({
      beerId: beerId,
      content: content,
      author: author
    });

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authHelper.makeAuth('kinvey')
    });

    return this.http.post(postCommentsUrl, bodyString, {headers: headers})
      .map((res) => {
        return res;
      })
      .catch((error: any) => throwError(error || 'Server error'));
  }

  deleteComment(commentId) {
    const deleteCommentsUrl = 'https://baas.kinvey.com/appdata/kid_rkgjslEzX/comments/' + commentId;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authHelper.makeAuth('kinvey')
    });


    return this.http.delete(deleteCommentsUrl, {headers: headers})
      .map((res) => {
        return res;
      })
      .catch((error: any) => throwError(error || 'Server error'));
  }
}
