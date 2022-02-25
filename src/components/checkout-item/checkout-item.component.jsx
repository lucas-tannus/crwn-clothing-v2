import React from "react"
import { connect } from "react-redux"

import { addItem, removeItem, clearItemFromCart } from "../../redux/cart/cart.actions"
import { CheckoutItemContainer, ImageContainer, CheckoutImage, ItemInfo, QuantityContainer, ArrowPointer, QuantityValue, RemoveButton } from "./ checkout-item.styles"

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <CheckoutImage src={imageUrl} alt="item" />
            </ImageContainer>
            <ItemInfo>{name}</ItemInfo>
            <QuantityContainer>
                <ArrowPointer onClick={() => removeItem(cartItem)}>&#10094;</ArrowPointer>
                <QuantityValue>{quantity}</QuantityValue>
                <ArrowPointer onClick={() => addItem(cartItem)}>&#10095;</ArrowPointer>
            </QuantityContainer>    
            <ItemInfo>{price}</ItemInfo>
            <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
