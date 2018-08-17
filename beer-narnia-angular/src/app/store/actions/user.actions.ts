import {Action} from "@ngrx/store";

export const INIT_USER = '[USER] Init';
export const DELETE_USER = '[USER] Delete';
export const UPDATE_IS_ADMIN = '[USER] IsAdmin';

export class InitUser implements Action {
  readonly type: string = INIT_USER;

  constructor(public payload) {
  }
}

export class DeleteUser implements Action {
  readonly type: string = DELETE_USER;
}

export class UpdateIsAdmin implements Action {
  readonly type: string = UPDATE_IS_ADMIN;

  constructor(public payload) {
  }
}
