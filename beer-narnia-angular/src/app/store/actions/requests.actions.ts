import {Action} from '@ngrx/store';

export const INIT_REQUESTS = '[REQUESTS] Init';

export class InitRequests implements Action {
  readonly type: string = INIT_REQUESTS;

  constructor(public payload: any) {
  }
}

export type Actions = InitRequests ;
