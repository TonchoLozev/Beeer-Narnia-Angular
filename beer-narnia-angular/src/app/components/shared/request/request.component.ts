import {Component, Input, OnInit, ViewChild} from '@angular/core';

import {ToastrService} from 'ngx-toastr';
import {RolesService} from '../../../services/roles.service';
import {RequestsService} from '../../../services/requests.service';

import {Store} from '@ngrx/store';
import {AppState} from '../../../store/app.state';
import * as RequestsActions from '../../../store/actions/requests.actions';
import {Request} from '../../../models/request.model';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  @Input() request;
  requests: Request[];

  constructor(private toastr: ToastrService,
              private rolesService: RolesService,
              private requestsService: RequestsService,
              private store: Store<AppState>) {

    this.acceptRequest = this.acceptRequest.bind(this);
    this.deleteRequest = this.deleteRequest.bind(this);
  }

  ngOnInit() {
    this.store.select('requests').subscribe(req => {
      this.requests = req.requests;
    });
  }

  acceptRequest() {
    const userId = this.request.userId;
    this.rolesService.removeRegularRole(userId).subscribe(removeResponse => {
      this.rolesService.makeAdminUser(userId).subscribe(makeAdminResponse => {
        this.requestsService.deleteRequest(this.request._id).subscribe(deleteRequestResponse => {
          const arrRequests = this.requests.filter(req => req._id !== this.request._id);
          this.store.dispatch(new RequestsActions.InitRequests({requests: arrRequests}));
          this.toastr.success(`Successfully given admin role to ${this.request.username}`);
        });
      });
    });
  }

  deleteRequest() {
    this.requestsService.deleteRequest(this.request._id).subscribe(deleteRequestResponse => {
      const arrRequests = this.requests.filter(req => req._id !== this.request._id);
      this.store.dispatch(new RequestsActions.InitRequests({requests: arrRequests}));
      this.toastr.success(`Successfully removed ${this.request.username}'s request`);
    });
  }

}
