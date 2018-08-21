import {Action} from "@ngrx/store";

export const INIT_BEERS = '[BEERS] Init';

export class InitBeers implements Action {
  readonly type: string = INIT_BEERS;

  constructor(public payload: any) {
  }
}

export type Actions = InitBeers ;
