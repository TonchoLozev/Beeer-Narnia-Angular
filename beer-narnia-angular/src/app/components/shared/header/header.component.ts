import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  isLogged = false;
  isAdmin = false;
  itemsCount = 5;

  constructor(
    private router: Router
  ) {
    this.changeLink = this.changeLink.bind(this);
  }

  changeLink(link) {
    this.router.navigateByUrl(link);
  }
}
