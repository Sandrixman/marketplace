import { createSelector } from "@reduxjs/toolkit"
import { I_Store } from "redux-store/store"

export const selectAllProducts = (state: I_Store) => state.products.allProducts.items

export const selectFilter = (state: I_Store) => state.products.filter.toLowerCase()

export const selectFavoritesId = (state: I_Store) => state.products.favoritesId

export const selectProductsLoading = (state: I_Store) => state.products.allProducts.isLoading

export const selectProductsError = (state: I_Store) => state.products.allProducts.error

export const selectFilteredOutProducts = createSelector(
    [selectAllProducts, selectFilter],
    (products, filter) => {
        return products.filter((product) => product.title.toLowerCase().includes(filter))
    }
)

export const selectFavoritetProducts = createSelector(
    [selectAllProducts, selectFavoritesId],
    (products, favoritesId) => {
        return products.filter((product) => favoritesId.includes(product.id))
    }
)
