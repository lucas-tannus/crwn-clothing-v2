import { createSelector } from "reselect"

const selectShop = state => state.shop

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectShopCollection = collectionName => createSelector(
    [selectShopCollections],
    collections => collections[collectionName]
)
