import {combineReducers} from "redux"
import ProductReducer from "./ProductReducer"

export default combineReducers({
    productsState: ProductReducer
})