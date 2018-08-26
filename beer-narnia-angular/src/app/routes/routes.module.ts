import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {HomeComponent} from '../components/home/home.component';
import {LoginComponent} from '../components/login/login.component';
import {RegisterComponent} from '../components/register/register.component';
import {CartComponent} from '../components/cart/cart.component';
import {BeerComponent} from '../components/beer/beer.component';
import {RequestAccessComponent} from '../components/request-access/request-access.component';
import {RequestsComponent} from '../components/requests/requests.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'cart', component: CartComponent},
  {path: 'beer', component: BeerComponent},
  {path: 'request-access', component: RequestAccessComponent},
  {path: 'requests', component: RequestsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutesModule {
}
