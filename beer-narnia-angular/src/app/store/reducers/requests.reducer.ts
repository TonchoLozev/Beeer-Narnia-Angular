import {Request} from '../../models/request.model';
import * as RequestsActions from '../actions/requests.actions';

const requestsModel: Request[] = [];
const initialState = {requests: requestsModel};

export function requestsReducer(state = initialState, action: RequestsActions.Actions) {
  switch (action.type) {
    case RequestsActions.INIT_REQUESTS:
      return {requests: action.payload.requests};
    default:
      return state;
  }
}
