import * as BeerActions from '../actions/beer.actions';

const beerId = sessionStorage.getItem('beerId') !== null ? sessionStorage.getItem('beerId') : '';
const initialState = {beerId: beerId};

export function beerReducer(state = initialState, action: BeerActions.Actions) {
  switch (action.type) {
    case BeerActions.INIT_BEER_ID:
      return {beerId: action.payload};
    default:
      return state;
  }
}
