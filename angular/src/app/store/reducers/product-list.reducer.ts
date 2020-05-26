import { Actions } from '../actions/product-list.action'
import { ActionTypes } from '../actiontypes'
import { IProduct } from '../../models/iproduct.model'

const initialState: Array<IProduct> = []

export function ProductListReducer(state = initialState, action: Actions) {
    switch(action.type) {
        case ActionTypes.PRODUCTLIST_SET :
            return state = action.payload 

        case ActionTypes.PRODUCTLIST_CLEAR :
            return state = initialState

        default: 
            return state
    }
}