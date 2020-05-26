import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/models/iproduct.model';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istat.model';
import { ShoppingCartService } from '../../services/shopping-cart.service'

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css']
})
export class ProductCardsComponent implements OnInit {

  public productlist: Observable<Array<IProduct>>

  constructor(private store: Store<IState>, private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.productlist = this.store.select(store => store.productlist)
  }

  addToCart(product, quantity = 1) {
    this.shoppingCartService.add(product, quantity)
  }

  removeFromCart(id) {
    this.shoppingCartService.remove(id)
  }

}