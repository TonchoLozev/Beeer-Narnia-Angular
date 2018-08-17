import {Component, OnInit} from '@angular/core';

import {AuthService} from "../../services/auth.service";
import {authHelper} from "../../helpers/auth";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public authService: AuthService,) {
  }

  ngOnInit() {
    if (!authHelper.isAuth()) {
      this.authService.login('guest', 'guest').subscribe(userInfo => {
        sessionStorage.setItem('authtoken', userInfo._kmd.authtoken);
      })
    } else {

    }
  }

}
