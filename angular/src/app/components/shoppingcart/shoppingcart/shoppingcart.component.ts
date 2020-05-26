import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istat.model';
import { IShoppingCart } from 'src/app/models/ishoppingcart.model';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  public product: IProduct
  public shoppingcart: Array<IShoppingCart>
  public shoppingcartTotal: number = 0

  constructor(private shoppingCartService: ShoppingCartService, private productService: ProductService, private router: ActivatedRoute,  private store: Store<IState>) { }

  ngOnInit(): void {
    this.productService.clear()
    this.productService.getById(this.router.snapshot.params.id)
    this.store.select(state => state.shoppingcart).subscribe(res => this.shoppingcart = res)
    this.store.select(state => state.shoppingcartTotal).subscribe(res => this.shoppingcartTotal = res)


  }

  clearCart() {
    this.shoppingCartService.clear()
  }

}