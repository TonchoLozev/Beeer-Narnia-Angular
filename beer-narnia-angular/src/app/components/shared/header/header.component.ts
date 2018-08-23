import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.state";

import {AuthService} from "../../../services/auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  username: string;
  isAdmin: boolean;
  itemsCount: number;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    public authService: AuthService,
    private toastr: ToastrService,
  ) {
    this.changeLink = this.changeLink.bind(this);
    this.logout = this.logout.bind(this);
  }

  ngOnInit() {
    this.store.select('user').subscribe(user => {
      this.username = user.username;
      this.isAdmin = user.isAdmin;
    });

    this.store.select('cart').subscribe(cart => {
      this.itemsCount = cart.cartItemsNumber;
    })
  }

  changeLink(link) {
    this.router.navigateByUrl(link);
  }

  logout() {
    this.authService.logout().subscribe(response => {
      sessionStorage.removeItem('roleId');
      sessionStorage.removeItem('authtoken');
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('email');
      sessionStorage.removeItem('userId');

      this.toastr.success('You are logged out now');

      window.location.reload();
    })
  }
}
