import {Component, OnInit} from '@angular/core';

import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import * as UserActions from '../../store/actions/user.actions';

import {RegisterModel} from "./register.model";

import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {RolesService} from "../../services/roles.service";
import {ToastrService} from "ngx-toastr";

import validateRegister from "../../helpers/validations/validateRegister";
import {authHelper} from "../../helpers/auth";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: RegisterModel;
  passwordShow: boolean = false;
  repeatPasswordShow: boolean = false;

  constructor(
    private router: Router,
    public authService: AuthService,
    public rolesService: RolesService,
    private toastr: ToastrService,
    private store: Store<AppState>
  ) {

    this.deleteUserNameInput = this.deleteUserNameInput.bind(this);
    this.deleteEmailInput = this.deleteEmailInput.bind(this);
    this.showPassword = this.showPassword.bind(this);
    this.hidePassword = this.hidePassword.bind(this);
    this.showRepeatPassword = this.showRepeatPassword.bind(this);
    this.hideRepeatPassword = this.hideRepeatPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  ngOnInit() {
    this.model = new RegisterModel('', '', '', '');
  }

  onSubmit() {
    const validateReg = validateRegister(this.model.username, this.model.password, this.model.repeatPassword, this.model.email);

    if (validateReg === 'success') {
      this.authService.register(this.model.username, this.model.email, this.model.password).subscribe(userInfo => {
        authHelper.saveSession(userInfo);

        this.rolesService.makeRegularUser(userInfo._id).subscribe(role => {
          sessionStorage.setItem('roleId', role.roleId);
        }, error1 => console.log(error1));

        this.store.dispatch(new UserActions.InitUser({username: userInfo.username}));

        this.toastr.success('Successfully registered');
        this.router.navigateByUrl(`home`);

      }, err => {
        if (err.status === 409) {
          this.toastr.error('Username already exists');
        } else if (err.status === 400) {
          this.toastr.error('Email already exists');
        }
        return;
      });

    } else {
      this.toastr.error(validateReg)
    }
  }

  deleteUserNameInput() {
    this.model.username = '';
  }

  deleteEmailInput() {
    this.model.email = '';
  }

  showPassword() {
    this.passwordShow = !this.passwordShow;
  }

  hidePassword() {
    this.passwordShow = false;
  }

  showRepeatPassword() {
    this.repeatPasswordShow = !this.repeatPasswordShow;
  }

  hideRepeatPassword() {
    this.repeatPasswordShow = false;
  }
}
