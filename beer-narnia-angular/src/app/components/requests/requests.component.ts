import {Component, OnInit} from '@angular/core';
import {RequestsService} from '../../services/requests.service';

import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import * as RequestsActions from '../../store/actions/requests.actions';
import {Request} from '../../models/request.model';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  requests: Request[];

  constructor(private requestsService: RequestsService,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.requestsService.getAllRequests().subscribe(requests => {
      this.store.dispatch(new RequestsActions.InitRequests({requests}));
      this.store.select('requests').subscribe(req => {
        this.requests = req.requests;
      });
    });
  }
}
