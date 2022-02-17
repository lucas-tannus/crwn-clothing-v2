import { CartActionTypes } from "./cart.types"

import { addItemToCart } from "./cart.utils"

const INITIAL_STATE = {
    hidden: true,
    cart_items: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cart_items: addItemToCart(state.cart_items, action.payload)
            }
        default:
            return state
    }
} 

export default cartReducer
