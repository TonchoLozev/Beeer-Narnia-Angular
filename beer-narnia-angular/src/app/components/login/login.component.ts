import {Component, OnInit} from '@angular/core';

import {LoginModel} from "./login.model";

import {AuthService} from "../../services/auth.service";
import {ToastrService} from 'ngx-toastr';
import {Router} from "@angular/router";

import validateLogin from '../../helpers/validations/validateLogin';
import {authHelper} from '../../helpers/auth'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: LoginModel;
  passwordShow: boolean = false;

  constructor(
    private router: Router,
    public authService: AuthService,
    private toastr: ToastrService
  ) {

    this.deleteUserNameInput = this.deleteUserNameInput.bind(this);
    this.showPassword = this.showPassword.bind(this);
    this.hidePassword = this.hidePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  ngOnInit() {
    this.model = new LoginModel('', '');
  }

  onSubmit() {
    if (!validateLogin(this.model.username, this.model.password)) {
      this.authService.login(this.model.username, this.model.password).subscribe(userInfo => {

        authHelper.saveSession(userInfo);
        sessionStorage.setItem('roleId', userInfo._kmd.roles[0].roleId);

        this.toastr.success('Successfully logged in');
        this.router.navigateByUrl(`home`);
      }, err => {
        this.toastr.error('Invalid credentials')
      });
    } else {
      this.toastr.error('Invalid credentials')
    }
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
