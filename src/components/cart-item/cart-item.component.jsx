import React from "react"

import { CartItemContainer, ItemImage, ItemDetailsContainer, ItemName } from "./cart-item.styles"

const CartItem = ({ item: { name, imageUrl, price, quantity }}) => (
    <CartItemContainer>
        <ItemImage alt="item" src={imageUrl} />
        <ItemDetailsContainer>
            <ItemName>{name}</ItemName>
            <span>
                {quantity} x ${price}
            </span>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem
