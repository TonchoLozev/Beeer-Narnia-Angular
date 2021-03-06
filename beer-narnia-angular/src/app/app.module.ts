import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {StoreModule} from '@ngrx/store';
import {userReducer} from './store/reducers/user.reducer';
import {beersReducer} from './store/reducers/beers.reducer';
import {cartReducer} from './store/reducers/cart.reducer';
import {beerReducer} from './store/reducers/beer.reducer';
import {requestsReducer} from './store/reducers/requests.reducer';

import {AppRoutesModule} from './routes/routes.module';
import {HomeModule} from './components/home/home.module';
import {SharedModule} from './components/shared/shared.module';
import {LoginModule} from './components/login/login.module';
import {RegisterModule} from './components/register/register.module';
import {CartModule} from './components/cart/cart.module';
import {BeerModule} from './components/beer/beer.module';
import {RequestAccessModule} from './components/request-access/request-access.module';
import {RequestsModule} from './components/requests/requests.module';

import {AppComponent} from './app.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

import {AuthService} from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({
      user: userReducer,
      beers: beersReducer,
      cart: cartReducer,
      beer: beerReducer,
      requests: requestsReducer
    }),
    BrowserAnimationsModule,
    AppRoutesModule,
    SharedModule,
    LoginModule,
    RegisterModule,
    CartModule,
    BeerModule,
    RequestAccessModule,
    RequestsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
