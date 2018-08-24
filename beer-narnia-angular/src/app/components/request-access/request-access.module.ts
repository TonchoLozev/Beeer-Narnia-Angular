import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';

import {RequestAccessComponent} from './request-access.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    RequestAccessComponent
  ]
})
export class RequestAccessModule {
}
