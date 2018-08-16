import {Component, OnInit} from '@angular/core';

import {LoginModel} from "./login.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: LoginModel;
  passwordShow: boolean = false;
  showError: boolean = false;

  constructor() {
    this.deleteUserNameInput = this.deleteUserNameInput.bind(this);
    this.showPassword = this.showPassword.bind(this);
    this.hidePassword = this.hidePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  ngOnInit() {
    this.model = new LoginModel('', '');
  }

  onSubmit() {
  }

  deleteUserNameInput() {
    this.model.username = '';
  }

  showPassword() {
    this.passwordShow = !this.passwordShow;
  }

  hidePassword() {
    this.passwordShow = false;
  }
}
