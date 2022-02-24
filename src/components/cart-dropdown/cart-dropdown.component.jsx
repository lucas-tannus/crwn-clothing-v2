import React from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { selectCartItems } from "../../redux/cart/cart.selectors"
import { toggleCartHidden } from "../../redux/cart/cart.actions"

import CartItem from "../cart-item/cart-item.component"

import { CartDropDownContainer, CartItemsContainer, CheckoutButton, EmptyMessage } from "./cart-dropdown.styles"

const CartDropDown = ({ cartItems, toggleCartHidden, history }) => (
    <CartDropDownContainer>
        <CartItemsContainer>
            {
                cartItems.length ?
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                )) : 
                <EmptyMessage>Your cart is empty</EmptyMessage>
            }
        </CartItemsContainer>
        <CheckoutButton onClick={() => {
            toggleCartHidden()
            history.push("/checkout")
        }}>
            GO TO CHECKOUT
        </CheckoutButton>
    </CartDropDownContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropDown))
