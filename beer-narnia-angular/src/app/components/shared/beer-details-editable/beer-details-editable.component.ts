import {Component, Input, OnInit, ViewChild} from '@angular/core';

import {ModalComponent, ModalService} from "angular-5-popup";
import {ToastrService} from 'ngx-toastr';

import {Store} from '@ngrx/store';
import {AppState} from '../../../store/app.state';
import * as CartActions from '../../../store/actions/cart.actions';
import * as BeerActions from '../../../store/actions/beer.actions';

import {BeersService} from "../../../services/beers.service";

import {Beer} from '../../../models/beer.model';
import {Router} from "@angular/router";
import {element} from "protractor";

@Component({
  selector: 'app-beer-details-editable',
  templateUrl: './beer-details-editable.component.html',
  styleUrls: ['./beer-details-editable.component.css']
})
export class BeerDetailsEditableComponent implements OnInit {
  @Input() beer: Beer;
  @ViewChild("modal") modal: ModalComponent;
  isOpen: boolean = false;

  constructor(
    private beersService: BeersService,
    private ms: ModalService,
    private toastr: ToastrService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.saveChanges = this.saveChanges.bind(this);
    this.cancel = this.cancel.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
  }

  ngOnInit() {
  }

  openModal(id) {
    this.isOpen = true;
    this.modal.openModal(id);

  }

  closeModal(id) {
    this.isOpen = false;
    this.modal.closeModal(id);
  }

  saveChanges() {
    this.beersService.editBeer(this.beer).subscribe(resp => {
      this.closeModal('save');
      this.toastr.success('Successfully update the product information');
    });
  }

  deleteArticle() {
    this.beersService.deleteBeer(this.beer._id).subscribe(resp => {

      let arrCart = [];
      this.store.select('cart').subscribe(cart => {
        arrCart = cart.cart;
      });

      arrCart = arrCart.filter(beer => beer._id !== this.beer._id);

      this.store.dispatch(new CartActions.UpdateCartItemsNumber(arrCart.length));
      this.store.dispatch(new CartActions.UpdateCart(arrCart));

      sessionStorage.setItem('cart', JSON.stringify(arrCart));

      this.router.navigateByUrl('home');
      this.toastr.success('Successfully deleted the product');
    });
  }

  cancel() {
    this.router.navigateByUrl('home');
  }
}
