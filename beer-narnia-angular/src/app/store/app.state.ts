import {User} from '../models/user.model';
import {Beer} from '../models/beer.model';
import {Request} from '../models/request.model';

export interface AppState {
  readonly user: User;
  readonly beers: Beer[];
  readonly requests;
  readonly cart;
  readonly beer;
}
