import {Component, OnInit} from '@angular/core';

import {Store} from '@ngrx/store';
import * as BeersActions from '../../store/actions/beers.actions';
import {AppState} from '../../store/app.state';

import {AuthService} from '../../services/auth.service';
import {BeersService} from '../../services/beers.service';
import {authHelper} from '../../helpers/auth';

import {Beer} from '../../models/beer.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  beers: Beer[];
  beersToShow: Beer[];
  pageNumbers;
  currentPage: number = 1;
  articlesPerPage: number = 8;

  constructor(public authService: AuthService,
              public beersService: BeersService,
              private store: Store<AppState>) {
    this.ngOnInit = this.ngOnInit.bind(this);
    this.createPages = this.createPages.bind(this);
    this.changeCurrentPageNumber = this.changeCurrentPageNumber.bind(this);
  }

  ngOnInit() {
    if (!authHelper.isAuth()) {
      this.authService.login('guest', 'guest').subscribe(userInfo => {
        sessionStorage.setItem('authtoken', userInfo._kmd.authtoken);

        this.beersService.getAllBeers().subscribe(beers => {
          this.store.dispatch(new BeersActions.InitBeers({beers}));
          this.store.select('beers').subscribe(beers => {
            this.beers = beers['beers'];

            this.pageNumbers = this.createPages();

            const indexOfLastTodo = this.currentPage * this.articlesPerPage;
            const indexOfFirstTodo = indexOfLastTodo - this.articlesPerPage;

            this.beersToShow = this.beers.slice(indexOfFirstTodo, indexOfLastTodo);
          });
        });
      });
    } else {
      this.beersService.getAllBeers().subscribe(beers => {
        this.store.dispatch(new BeersActions.InitBeers({beers}));
        this.store.select('beers').subscribe(beers => {
          this.beers = beers['beers'];

          this.pageNumbers = this.createPages();

          const indexOfLastTodo = this.currentPage * this.articlesPerPage;
          const indexOfFirstTodo = indexOfLastTodo - this.articlesPerPage;

          this.beersToShow = this.beers.slice(indexOfFirstTodo, indexOfLastTodo);
        });
      });
    }
  }

  createPages() {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.beers.length / this.articlesPerPage); i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  }

  changeCurrentPageNumber(event) {
    this.currentPage = Number(event.target.textContent);

    const indexOfLastTodo = this.currentPage * this.articlesPerPage;
    const indexOfFirstTodo = indexOfLastTodo - this.articlesPerPage;

    this.beersToShow = this.beers.slice(indexOfFirstTodo, indexOfLastTodo);
  }
}
