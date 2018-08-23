import {Action} from "@ngrx/store";

export const INIT_BEER_ID = '[BEER_ID] Init';

export class InitBeerId implements Action {
  readonly type: string = INIT_BEER_ID;

  constructor(public payload: any) {
  }
}

export type Actions = InitBeerId ;
