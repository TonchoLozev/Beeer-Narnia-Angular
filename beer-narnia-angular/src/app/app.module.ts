import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {StoreModule} from '@ngrx/store';
import {userReducer} from "./store/reducers/user.reducer";
import {beersReducer} from "./store/reducers/beers.reducer";
import {cartReducer} from "./store/reducers/cart.reducer";

import {AppRoutesModule} from './routes/routes.module';
import {HomeModule} from './components/home/home.module';
import {SharedModule} from './components/shared/shared.module';
import {LoginModule} from "./components/login/login.module";
import {RegisterModule} from "./components/register/register.module";
import {CartModule} from "./components/cart/cart.module";
import {AppComponent} from './app.component';

import {AuthService} from "./services/auth.service";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({
      user: userReducer,
      beers: beersReducer,
      cart: cartReducer
    }),
    BrowserAnimationsModule,
    AppRoutesModule,
    SharedModule,
    LoginModule,
    RegisterModule,
    CartModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
