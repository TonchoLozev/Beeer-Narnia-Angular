import {Component, OnInit} from '@angular/core';

import {BeersService} from '../../services/beers.service';

import {AppState} from '../../store/app.state';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {
  beer;
  isAdmin: boolean;

  constructor(private store: Store<AppState>,
              private beersService: BeersService) {
    this.ngOnInit = this.ngOnInit.bind(this);
  }

  ngOnInit() {
    let id;

    this.store.select('beer').subscribe(beer => {
      id = beer.beerId;
    });

    this.beersService.getBeer(id).subscribe(beer => {
      this.beer = beer;
    });

    this.store.select('user').subscribe(user => {
      this.isAdmin = user.isAdmin;
    });
  }

}
