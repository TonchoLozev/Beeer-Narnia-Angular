import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {ScModalModule} from 'angular-5-popup';

import {RequestsComponent} from './requests.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ScModalModule
  ],
  declarations: [
    RequestsComponent
  ]
})
export class RequestsModule {
}
