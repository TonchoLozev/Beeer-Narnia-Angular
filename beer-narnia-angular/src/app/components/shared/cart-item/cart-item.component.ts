import {Component, Input, OnInit} from '@angular/core';

import {Beer} from '../../../models/beer.model';

import {Store} from '@ngrx/store';
import {AppState} from '../../../store/app.state';
import * as CartActions from '../../../store/actions/cart.actions';
import * as BeerActions from '../../../store/actions/beer.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() beer: Beer;
  @Input() index: number;
  hover: boolean = false;
  count: number;

  constructor(private store: Store<AppState>,
              private router: Router) {
    this.plusCount = this.plusCount.bind(this);
    this.minusCount = this.minusCount.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.openBeerDetails = this.openBeerDetails.bind(this);
  }

  ngOnInit() {
    this.count = this.beer.count;
  }

  plusCount() {
    this.count++;
  }

  minusCount() {
    if (this.count > 1) {
      this.count--;
    }
  }

  removeItem(event) {
    const indexOfBeer = Number(event.target.id);

    let arrCart = [];
    this.store.select('cart').subscribe(cart => {
      arrCart = cart.cart;
    });

    arrCart.splice(indexOfBeer, 1);

    this.store.dispatch(new CartActions.UpdateCartItemsNumber(arrCart.length));
    this.store.dispatch(new CartActions.UpdateCart(arrCart));

    sessionStorage.setItem('cart', JSON.stringify(arrCart));
  }

  openBeerDetails(id) {
    this.store.dispatch(new BeerActions.InitBeerId(id));
    this.router.navigateByUrl('beer');
    sessionStorage.setItem('beerId', id);
  }
}
