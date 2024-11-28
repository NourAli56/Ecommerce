import * as types from "../ActionType";

const initState = {
    products: [],
    loadingProducts: true,
    cart: []
}

const ProductReducer = (state = initState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loadingProducts: false
            };
        case types.ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        case types.DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload),
            };
        case types.UPDATE_PRODUCT:
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.payload.id ? action.payload : product
                ),
            };
        case types.ADD_PRODUCT_TO_CART:
            const existingProductIndex = state.cart.findIndex(
                item => item.id === action.payload.id
            );

            if (existingProductIndex !== -1) {
                const updatedCart = [...state.cart];
                updatedCart[existingProductIndex] = {
                    ...updatedCart[existingProductIndex],
                    my_count: action.payload.my_count,
                };
                return {
                    ...state,
                    cart: updatedCart,
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, action.payload],
                };
            }
        case types.REMOVE_PRODUCT_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload),
            };
        case types.UPDATE_PRODUCT_QUANTITY: {
            const { id, myCount } = action.payload;
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === id
                        ? { ...product, count: product.count - myCount }
                        : product
                ),
            };
        }
        case types.CLEAR_CART: {
            return {
                ...state,
                cart: [],
            };
        }

        default:
            return state;
    }
};

export default ProductReducer;

