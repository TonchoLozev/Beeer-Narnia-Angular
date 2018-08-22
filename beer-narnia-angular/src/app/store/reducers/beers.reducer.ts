import {Beer} from "../../models/beer.model";
import * as BeersActions from '../actions/beers.actions';

const beersModel: Beer[] = [];
const initialState = {beers: beersModel};

export function beersReducer(state = initialState, action: BeersActions.Actions) {
  switch (action.type) {
    case BeersActions.INIT_BEERS:
      return {beers: action.payload.beers};
    default:
      return state;
  }
}
