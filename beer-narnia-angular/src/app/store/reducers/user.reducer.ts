import {User} from "../../models/user.model";
import * as UserActions from '../actions/user.actions';
import {authHelper} from "../../helpers/auth";

const initName = sessionStorage.getItem('username') === null ? '' : sessionStorage.getItem('username');

const initialState: User = {
  username: initName,
  isAdmin: authHelper.isAdmin()
};

export function userReducer(state: User = initialState, action: UserActions.Actions) {
  switch (action.type) {
    case UserActions.INIT_USER:
      return {username: action.payload.username, isAdmin: authHelper.isAdmin()};
    default:
      return state;
  }
}
