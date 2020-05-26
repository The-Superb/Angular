import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as ProductActions from '../store/actions/product.actions'
import { IState } from '../models/istat.model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _baseUrl:string = 'http://localhost:9999/api/products/'

  constructor(private http: HttpClient, private store: Store<IState>, ) { }
  

  getById(id) {

    if(id !== undefined)
    this.http.get<any>(this._baseUrl + id).subscribe(
      res => this.store.dispatch(new ProductActions.Set(res)),
    )
  }

  clear() {
    this.store.dispatch(new ProductActions.Clear())
  }

}