import { IProduct } from './iproduct.model';
import { IShoppingCart } from './ishoppingcart.model';

export interface IState {
    readonly productlist: Array<IProduct>
    readonly product: IProduct
    readonly shoppingcart: Array<IShoppingCart>
    readonly shoppingcartTotal: number
    readonly shoppingcartAmount: number
}