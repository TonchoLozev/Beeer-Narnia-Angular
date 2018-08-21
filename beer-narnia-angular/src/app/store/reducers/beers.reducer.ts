import {Beer} from "../../models/beer.model";
import * as BeersActions from '../actions/beers.action';

const initialState = {beers: []};

export function beersReducer(state = initialState, action: BeersActions.Actions) {
  switch (action.type) {
    case BeersActions.INIT_BEERS:
      return [action.payload.beers];
    default:
      return state;
  }
}
