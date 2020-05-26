import { Injectable } from '@angular/core';
import { IState } from '../models/istat.model'
import { Store } from '@ngrx/store';
import * as ShoppingCartActions from '../store/actions/shoppingcart.action'

@Injectable({
  providedIn: 'root'
})

export class ShoppingCartService {

  private cart

  constructor(private store: Store<IState>) { }

  add(product, quantity) {
    this.store.select(store => store.shoppingcart).subscribe(res => this.cart = res)
    let exists = this.cart.find(x => {return x.product._id === product._id})
    
    if(!exists) {
      this.store.dispatch(new ShoppingCartActions.Add({product, quantity}))
    }
    else {
      this.increment({product,quantity})
    }
    this.itemCountCart()
    this.totalCart()
  }

  remove(id) {
      this.store.dispatch(new ShoppingCartActions.Remove(id))
      this.itemCountCart()
      this.totalCart()
    }

  increment(product){
    this.store.dispatch(new ShoppingCartActions.Increment(product))
    this.itemCountCart()
      this.totalCart()
  }

  decrement(product) {
    if(product.quantity <= 1) {
      this.remove(product.product._id)
    }
    this.store.dispatch(new ShoppingCartActions.Decrement(product))
    this.itemCountCart()
      this.totalCart()
  }

  clear() {
    this.store.dispatch(new ShoppingCartActions.Clear())
    this.itemCountCart()
      this.totalCart()
  }

  totalCart (){
    this.store.select(store => store.shoppingcart).subscribe(res => this.cart = res)
    let total = 0
    this.cart.forEach(item => {
      total += item.product.price * item.quantity
    })
    this.store.dispatch(new ShoppingCartActions.Total(total))
  }

  itemCountCart (){
    this.store.select(store => store.shoppingcart).subscribe(res => this.cart = res)
    let counter = 0
    this.cart.forEach(item => {
      counter += item.quantity
    })
    this.store.dispatch(new ShoppingCartActions.Amount(counter))
  }
}