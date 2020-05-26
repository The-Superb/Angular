import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istat.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public shoppingcartAmount: number = 0

  constructor(private shoppingCartService: ShoppingCartService,  private store: Store<IState>) { }

  ngOnInit(): void {
    this.store.select(store => store.shoppingcartAmount).subscribe(res => this.shoppingcartAmount = res)
  }
}