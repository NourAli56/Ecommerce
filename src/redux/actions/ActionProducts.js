import * as types from "../ActionType";
import axios from "axios";

const get = (arr, type) => {
    return ({
        type: type,
        payload: arr
    })
}
export const loadProducts = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("https://dummyjson.com/products");
            console.log('res',response)
            dispatch(get(response.data?.products?.map((product)=>({
                ...product,
                count: 5
            })),types.GET_PRODUCTS))
        } catch (error) {
            console.error("Failed to load products:", error);
        }
    };
};
export const addProduct = (product) => {
    return {
        type: types.ADD_PRODUCT,
        payload: product,
    };
};
export const deleteProduct = (id) => {
    return {
        type: types.DELETE_PRODUCT,
        payload: id,
    };
};
export const updateProduct = (product) => {
    return {
        type: types.UPDATE_PRODUCT,
        payload: product, 
    };
};
export const addProductToCart = (product) => {
    return {
        type: types.ADD_PRODUCT_TO_CART,
        payload: product,
    };
    
};
export const removeProductFromCart = (id) => {
    return {
        type: types.REMOVE_PRODUCT_FROM_CART,
        payload: id,
    };
};
export const updateProducts = (id, myCount) => ({
    type: types.UPDATE_PRODUCT_QUANTITY,
    payload: { id, myCount },
});
export const clearCart = () => ({
    type: types.CLEAR_CART,
});