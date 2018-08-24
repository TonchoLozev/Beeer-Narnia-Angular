import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {RequestsService} from '../../services/requests.service';
import {ToastrService} from 'ngx-toastr';

import {RequestClass} from './request.class';
import validateRequest from '../../helpers/validations/validateRequest';

@Component({
  selector: 'app-request-access',
  templateUrl: './request-access.component.html',
  styleUrls: ['./request-access.component.css']
})
export class RequestAccessComponent implements OnInit {
  request: RequestClass;

  constructor(private router: Router,
              private requestsServices: RequestsService,
              private toastr: ToastrService,) {
    this.sendRequest = this.sendRequest.bind(this);
    this.deleteFirstNameInput = this.deleteFirstNameInput.bind(this);
    this.deleteLastNameInput = this.deleteLastNameInput.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  ngOnInit() {
    this.request = new RequestClass('', '', '', '', '');
  }

  deleteFirstNameInput() {
    this.request.firstname = '';
  }

  deleteLastNameInput() {
    this.request.lastname = '';
  }

  cancel() {
    this.router.navigateByUrl('home');
  }

  sendRequest() {
    const validate = validateRequest(this.request.firstname, this.request.lastname, this.request.reason);
    if (validate === 'success') {
      this.requestsServices.sendRequest(this.request).subscribe(resp => {
        this.toastr.success('Your request was sent successfully');
        this.router.navigateByUrl('home');
      }, error => {
        if (error.status === 400) {
          this.toastr.error('There is a request from this account already');
        }
      });
    } else {
      this.toastr.error(validate);
    }
  }
}
