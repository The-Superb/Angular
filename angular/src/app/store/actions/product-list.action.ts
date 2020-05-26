import { Action } from '@ngrx/store'
import { ActionTypes } from '../actiontypes'
import { IProduct } from 'src/app/models/iproduct.model'

export class Set implements Action {
    public readonly type = ActionTypes.PRODUCTLIST_SET
    constructor(public payload: Array<IProduct>) {}

}
export class Clear implements Action {
    public readonly type = ActionTypes.PRODUCTLIST_CLEAR
    constructor() {}
}

export type Actions = Set | Clear