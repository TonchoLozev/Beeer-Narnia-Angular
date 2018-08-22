import {Beer} from "../../models/beer.model";
import * as CartActions from '../actions/cart.actions';

const arrCart = JSON.parse(sessionStorage.getItem('cart'));
const initCart = arrCart === null ? [] : arrCart;
const initialState = {cart: initCart, cartItemsNumber: initCart.length};

export function cartReducer(state = initialState, action: CartActions.Actions) {
  switch (action.type) {
    case CartActions.UPDATE_CART:
      return {...state, cart: action.payload.cart};
    case CartActions.UPDATE_CART_ITEMS_NUMBER:
      return {...state, cartItemsNumber: action.payload.cartItemsNumber};
    default:
      return state;
  }
}
