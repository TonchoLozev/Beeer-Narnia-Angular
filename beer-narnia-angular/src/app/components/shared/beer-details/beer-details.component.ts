import {Component, Input, OnInit} from '@angular/core';

import {Beer} from '../../../models/beer.model';

import {AppState} from '../../../store/app.state';
import {Store} from '@ngrx/store';
import * as CartActions from '../../../store/actions/cart.actions';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {
  @Input() beer: Beer;
  count: number = 1;

  constructor(private store: Store<AppState>) {
    this.plusCount = this.plusCount.bind(this);
    this.minusCount = this.minusCount.bind(this);
    this.addInCart = this.addInCart.bind(this);
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

    let arrCart = [];
    this.store.select('cart').subscribe(cart => {
      arrCart = cart.cart;
    });

    let index = 0;
    let isFound = false;
    for (let i = 0; i < arrCart.length; i++) {
      if (arrCart[i]._id === this.beer._id) {
        index = i;
        isFound = true;
        break;
      }
    }

    if (isFound) {
      arrCart[index].count += Number(this.count);
    } else {
      this.beer.count = Number(this.count);
      arrCart.push(this.beer);
      this.store.dispatch(new CartActions.UpdateCartItemsNumber(arrCart.length));
    }
    this.store.dispatch(new CartActions.UpdateCart(arrCart));
    sessionStorage.setItem('cart', JSON.stringify(arrCart));
  }
}
