import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istat.model';
import { IShoppingCart } from 'src/app/models/ishoppingcart.model';

@Component({
  selector: 'app-shoppingcartproduct',
  templateUrl: './shoppingcartproduct.component.html',
  styleUrls: ['./shoppingcartproduct.component.css']
})
export class ShoppingcartproductComponent implements OnInit {

  public shoppingcart: Array<IShoppingCart>

  constructor(private shoppingCartService: ShoppingCartService, private router: ActivatedRoute, private store: Store<IState>) { }

  ngOnInit(): void {
    this.store.select(state => state.shoppingcart).subscribe(res => this.shoppingcart = res)
  }

  removeFromCart(id) {
    this.shoppingCartService.remove(id)
  }

  increment(item) {
    this.shoppingCartService.increment(item)
  }

  decrement(item) {
    this.shoppingCartService.decrement(item)
  }

}