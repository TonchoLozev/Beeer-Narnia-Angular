import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";

import {AppState} from "./store/app.state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username;

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.store.select('user').subscribe(user => {
      console.log(user);
      this.username = user.username;
    })
  }
}
