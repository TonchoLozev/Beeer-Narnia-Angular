import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ScModalModule} from 'angular-5-popup';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {InputComponent} from './input/input.component';
import {ButtonComponent} from './button/button.component';
import {TextAreaComponent} from './text-area/text-area.component';
import {BeerBoxComponent} from './beer-box/beer-box.component';
import {CartItemComponent} from './cart-item/cart-item.component';
import {BeerDetailsComponent} from './beer-details/beer-details.component';
import {BeerDetailsEditableComponent} from './beer-details-editable/beer-details-editable.component';
import {RequestComponent} from './request/request.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ScModalModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    InputComponent,
    ButtonComponent,
    TextAreaComponent,
    BeerBoxComponent,
    CartItemComponent,
    BeerDetailsComponent,
    BeerDetailsEditableComponent,
    RequestComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    InputComponent,
    ButtonComponent,
    TextAreaComponent,
    BeerBoxComponent,
    CartItemComponent,
    BeerDetailsComponent,
    BeerDetailsEditableComponent,
    RequestComponent
  ]
})
export class SharedModule {
}
