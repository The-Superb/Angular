import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { ProductListComponent } from './views/product-list/product-list.component';
import { ProductComponent } from './views/product/product.component';


const routes: Routes = [
  { path: '', component: LandingpageComponent},
  { path: 'home', component: LandingpageComponent},
  { path: 'products', component:ProductListComponent},
  { path: 'products/:id', component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
