import { createSelector } from "@reduxjs/toolkit"
import { I_Store } from "../types"

export const selectAllProducts = (state: I_Store) => state.products.allProducts.items

export const selectFilter = (state: I_Store) => state.products.filter.toLowerCase()

export const selectFavorites = (state: I_Store) => state.products.favorites

export const selectProductsLoading = (state: I_Store) => state.products.allProducts.isLoading

export const selectProductsError = (state: I_Store) => state.products.allProducts.error

export const selectFilteredOutProducts = createSelector(
    [selectAllProducts, selectFilter],
    (products, filter) => {
        return products.filter((product) => product.title.toLowerCase().includes(filter))
    }
)
