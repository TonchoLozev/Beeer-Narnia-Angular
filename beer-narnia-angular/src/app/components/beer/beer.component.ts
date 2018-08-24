import {Component, OnInit} from '@angular/core';

import {BeersService} from '../../services/beers.service';
import {CommentsService} from "../../services/comments.service";

import {AppState} from '../../store/app.state';
import {Store} from '@ngrx/store';

import CalcCommentTime from '../../helpers/comment-time';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {
  beer;
  comment: string;
  comments;
  isAdmin: boolean;
  username: string;
  calcCommentTime: Function = CalcCommentTime;
  isLogged: boolean;

  constructor(private store: Store<AppState>,
              private beersService: BeersService,
              private commentsService: CommentsService,
  ) {
    this.ngOnInit = this.ngOnInit.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.postComment = this.postComment.bind(this);
  }

  ngOnInit() {
    let id;

    this.store.select('beer').subscribe(beer => {
      id = beer.beerId;
    });

    this.beersService.getBeer(id).subscribe(beer => {
      this.beer = beer;
    });

    this.store.select('user').subscribe(user => {
      this.isAdmin = user.isAdmin;
      this.username = user.username;
      this.isLogged = this.username !== '';
    });

    this.commentsService.getComments(id).subscribe(comments => {
      this.comments = comments;
    })
  }

  deleteComment(commentId) {
    this.commentsService.deleteComment(commentId).subscribe(resp => {
      this.comments = this.comments.filter(comment => comment._id !== commentId);
    });
  }

  postComment() {
    this.commentsService.postComment(this.beer._id, this.comment, this.username).subscribe(resp => {
      this.comments.unshift(resp);
      this.comment = '';
    })
  }
}
