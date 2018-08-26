import {Component, OnInit} from '@angular/core';

import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import {Beer} from '../../models/beer.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Beer[];
  hover: boolean = false;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select('cart').subscribe(cart => {
      this.cartItems = cart.cart;
    });
  }
}
