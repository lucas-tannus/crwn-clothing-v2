import { createSelector } from "reselect"

const selectShop = state => state.shop

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectShopCollectionPreview = createSelector(
    [selectShopCollections],
    collections => collections ? Object.keys(collections).map(collectionKey => collections[collectionKey]) : []
)

export const selectShopCollection = collectionName => createSelector(
    [selectShopCollections],
    collections => collections ? collections[collectionName] : null
)
