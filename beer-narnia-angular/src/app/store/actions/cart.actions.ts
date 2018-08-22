import {Action} from "@ngrx/store";

export const UPDATE_CART = '[CART] Update';
export const UPDATE_CART_ITEMS_NUMBER = '[CART_ITEMS_NUMBER] Update';

export class UpdateCart implements Action {
  readonly type: string = UPDATE_CART;

  constructor(public payload: any) {
  }
}

export class UpdateCartItemsNumber implements Action {
  readonly type: string = UPDATE_CART_ITEMS_NUMBER;

  constructor(public payload: any) {
  }
}

export type Actions = UpdateCart | UpdateCartItemsNumber;
