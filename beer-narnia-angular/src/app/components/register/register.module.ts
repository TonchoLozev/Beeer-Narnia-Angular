import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

import {RegisterComponent} from "./register.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule {
}
