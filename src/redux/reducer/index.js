import handleCart from './handleCart'
import handleSales from './handleSales'
import stock from './stock'

import { combineReducers } from "redux";
const rootReducers = combineReducers({
    handleCart,
    handleSales,
    stock,
})
export default rootReducers