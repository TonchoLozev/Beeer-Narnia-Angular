import {User} from "../models/user.model";
import {Beer} from "../models/beer.model";

export interface AppState {
  readonly user: User;
  readonly beers: Beer[];
  readonly cart;
}
