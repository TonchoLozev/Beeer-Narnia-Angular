import {Component, OnInit} from '@angular/core';

import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import * as UserActions from '../../store/actions/user.actions';

import {LoginClass} from './login.class';

import {AuthService} from '../../services/auth.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

import validateLogin from '../../helpers/validations/validateLogin';
import {authHelper} from '../../helpers/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: LoginClass;
  passwordShow: boolean = false;

  constructor(private store: Store<AppState>,
              private router: Router,
              public authService: AuthService,
              private toastr: ToastrService) {

    this.deleteUserNameInput = this.deleteUserNameInput.bind(this);
    this.showPassword = this.showPassword.bind(this);
    this.hidePassword = this.hidePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  ngOnInit() {
    this.model = new LoginClass('', '');
  }

  onSubmit() {
    if (!validateLogin(this.model.username, this.model.password)) {
      this.authService.login(this.model.username, this.model.password).subscribe(userInfo => {
        authHelper.saveSession(userInfo);

        sessionStorage.setItem('roleId', userInfo._kmd.roles[0].roleId);

        this.store.dispatch(new UserActions.InitUser({username: userInfo.username}));

        this.toastr.success('Successfully logged in');
        this.router.navigateByUrl(`home`);
      }, err => {
        this.toastr.error('Invalid credentials');
      });
    } else {
      this.toastr.error('Invalid credentials');
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
