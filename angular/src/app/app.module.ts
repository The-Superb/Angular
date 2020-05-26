import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { ProductListComponent } from './views/product-list/product-list.component';
import { ProductComponent } from './views/product/product.component';
import { ProductCardsComponent } from './components/product-cards/product-cards.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart/shoppingcart.component';
import { ShoppingcartproductComponent } from './components/shoppingcart/shoppingcartproduct/shoppingcartproduct.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListReducer } from './store/reducers/product-list.reducer';
import { ProductReducer } from './store/reducers/product.reducer';
import { ShoppingCartReducer } from './store/reducers/shoppingcart.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ShoppingCartReducerTotal } from './store/reducers/shoppingcart-total-reducer';
import { ShoppingCartReducerAmount } from './store/reducers/shoppingcart-amount-reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingpageComponent,
    ProductListComponent,
    ProductComponent,
    ProductCardsComponent,
    ShoppingcartComponent,
    ShoppingcartproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      productlist: ProductListReducer,
      product: ProductReducer,
      shoppingcart: ShoppingCartReducer,
      shoppingcartTotal: ShoppingCartReducerTotal,
      shoppingcartAmount: ShoppingCartReducerAmount
    }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
