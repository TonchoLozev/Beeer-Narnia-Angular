import {Component, Input, OnInit} from '@angular/core';
import {Beer} from '../../../models/beer.model';

import {AppState} from '../../../store/app.state';
import {Store} from '@ngrx/store';
import * as CartActions from '../../../store/actions/cart.actions';
import * as BeerActions from '../../../store/actions/beer.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-beer-box',
  templateUrl: './beer-box.component.html',
  styleUrls: ['./beer-box.component.css']
})
export class BeerBoxComponent implements OnInit {
  @Input() beer: Beer;
  @Input() index: number;
  @Input() currentPage: number;
  @Input() beers: Beer[];
  @Input() hover: string;
  count: number = 1;

  constructor(private store: Store<AppState>,
              private router: Router) {
    this.plusCount = this.plusCount.bind(this);
    this.minusCount = this.minusCount.bind(this);
    this.addInCart = this.addInCart.bind(this);
    this.openBeerDetails = this.openBeerDetails.bind(this);
  }

  ngOnInit() {
  }

  plusCount() {
    this.count++;
  }

  minusCount() {
    if (this.count > 1) {
      this.count--;
    }
  }

  addInCart(event) {
    const indexOfBeer = Number(event.target.id);
    const magicNumber = ((this.currentPage * 8) - 8) + indexOfBeer;
    const beer = this.beers[magicNumber];

    let arrCart = [];
    this.store.select('cart').subscribe(cart => {
      arrCart = cart.cart;
    });

    let index = 0;
    let isFound = false;
    for (let i = 0; i < arrCart.length; i++) {
      if (arrCart[i]._id === beer._id) {
        index = i;
        isFound = true;
        break;
      }
    }

    if (isFound) {
      arrCart[index].count += Number(this.count);
    } else {
      beer.count = Number(this.count);
      arrCart.push(beer);
      this.store.dispatch(new CartActions.UpdateCartItemsNumber(arrCart.length));
    }
    this.store.dispatch(new CartActions.UpdateCart(arrCart));
    sessionStorage.setItem('cart', JSON.stringify(arrCart));
  }

  openBeerDetails(id) {
    this.store.dispatch(new BeerActions.InitBeerId(id));
    this.router.navigateByUrl('beer');
    sessionStorage.setItem('beerId', id);
  }
}
