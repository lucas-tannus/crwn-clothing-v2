import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { toggleCartHidden } from "../../redux/cart/cart.actions"
import { selectCartItemsCount } from "../../redux/cart/cart.selectors"

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles"

const CartIcon = ({ toggleCartHidden, countItems }) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIcon />
        <ItemCount>{countItems}</ItemCount>
    </CartIconContainer>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    countItems: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
