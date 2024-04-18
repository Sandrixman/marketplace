import { createSlice, PayloadAction, isPending, isRejected, isFulfilled } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"

import { dummyProducts } from "redux-store/dummyProducts"
import { fetchProducts, addProduct, deleteProduct } from "./operations"
import { I_ProductState } from "types/products/types"

const initialState: I_ProductState = {
    allProducts: {
        items: dummyProducts,
        isLoading: false,
        error: null,
    },
    favoritesId: [],
    filter: "",
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        findProduct(state, action: PayloadAction<string>) {
            state.filter = action.payload
        },
        // checking favorites & adding or remove favorite
        switchFavorites(state, action: PayloadAction<string>) {
            const checkFavorite = state.favoritesId.includes(action.payload)
            if (checkFavorite) {
                state.favoritesId = state.favoritesId.filter(
                    (productId) => productId !== action.payload
                )
            } else {
                state.favoritesId.push(action.payload)
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(isPending(fetchProducts, addProduct, deleteProduct), (state) => {
                state.allProducts.isLoading = true
            })
            .addMatcher(isRejected(fetchProducts, addProduct, deleteProduct), (state, action) => {
                state.allProducts.isLoading = false
                state.allProducts.error = action.payload ?? "Unknown error"
            })
            .addMatcher(isFulfilled(fetchProducts), (state, action) => {
                state.allProducts.isLoading = false
                state.allProducts.error = null
                state.allProducts.items = action.payload
            })
            .addMatcher(isFulfilled(addProduct), (state, action) => {
                state.allProducts.isLoading = false
                state.allProducts.error = null
                state.allProducts.items.push(action.payload)
            })
            .addMatcher(isFulfilled(deleteProduct), (state, action) => {
                state.allProducts.isLoading = false
                state.allProducts.error = null
                state.allProducts.items = state.allProducts.items.filter(
                    (product) => product.id !== action.payload.id
                )
            })
    },
})

const persistProductsConfig = {
    key: "products",
    storage,
    whitelist: ["favoritesId"],
}

export const { findProduct, switchFavorites } = productsSlice.actions

export const persistProductsReducer = persistReducer<I_ProductState>(
    persistProductsConfig,
    productsSlice.reducer
)
