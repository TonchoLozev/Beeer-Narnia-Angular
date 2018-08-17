import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppRoutesModule} from './routes/routes.module';
import {HomeModule} from './components/home/home.module';
import {SharedModule} from './components/shared/shared.module';
import {LoginModule} from "./components/login/login.module";
import {RegisterModule} from "./components/register/register.module";

import {AppComponent} from './app.component';

import {AuthService} from "./services/auth.service";
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutesModule,
    SharedModule,
    LoginModule,
    RegisterModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
