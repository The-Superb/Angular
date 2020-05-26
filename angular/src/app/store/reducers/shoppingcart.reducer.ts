import { Actions } from '../actions/shoppingcart.action'
import { ActionTypes } from '../actiontypes'
import { IShoppingCart } from '../../models/ishoppingcart.model'

const initialState: Array<IShoppingCart> = []

export function ShoppingCartReducer(state = initialState, action: Actions) {
    
    switch(action.type) {
        case ActionTypes.SHOPPINGCART_ADD :
            return state = [...state, action.payload]

        case ActionTypes.SHOPPINGCART_REMOVE :
            return state = state.filter(item => item.product._id !== action.payload)
        
        case ActionTypes.SHOPPINGCART_INCREMENT : 
        let _index = state.findIndex(y => {return y.product._id === action.payload.product._id})
            return state.map((item, index) => {
                if(index !== _index) {
                    return item
                } 
                let newItem = {product: item.product, quantity: item.quantity + 1 }
                return newItem
            })

            case ActionTypes.SHOPPINGCART_DECREMENT : 
            let _indexx = state.findIndex(y => {return y.product._id === action.payload.product._id})
            return state.map((item, index) => {
                if(index !== _indexx) {
                    return item
                } 
                let newItem = {product: item.product, quantity: item.quantity - 1 }
                return newItem
            })

            case ActionTypes.SHOPPINGCART_CLEAR :
                return state = initialState

            default: 
                return state
    }
}