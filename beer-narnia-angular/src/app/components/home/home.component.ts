import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import {AuthService} from "../../services/auth.service";
import {BeersService} from "../../services/beers.service";
import {authHelper} from "../../helpers/auth";

import {Beer} from "../../models/beer.model";
import * as BeersActions from '../../store/actions/beers.action';
import {AppState} from '../../store/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  beers: Beer[];

  constructor(
    public authService: AuthService,
    public beersService: BeersService,
    private store: Store<AppState>
  ) {
    this.ngOnInit = this.ngOnInit.bind(this);
  }

  ngOnInit() {
    if (!authHelper.isAuth()) {
      this.authService.login('guest', 'guest').subscribe(userInfo => {
        sessionStorage.setItem('authtoken', userInfo._kmd.authtoken);
      })
    }

    this.beersService.getAllBeers().subscribe(beers => {
      this.store.dispatch(new BeersActions.InitBeers({beers}));
      this.store.select('beers').subscribe(beers => {
        this.beers = beers;
        console.log(beers)
      })
    });
  }

}
