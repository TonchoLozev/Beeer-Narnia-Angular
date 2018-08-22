import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {InputComponent} from './input/input.component';
import {ButtonComponent} from './button/button.component';
import {TextAreaComponent} from './text-area/text-area.component';
import {BeerBoxComponent } from './beer-box/beer-box.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    InputComponent,
    ButtonComponent,
    TextAreaComponent,
    BeerBoxComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    InputComponent,
    ButtonComponent,
    TextAreaComponent,
    BeerBoxComponent
  ]
})
export class SharedModule {
}
