import { createSlice, PayloadAction, isPending, isRejected, isFulfilled } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"

import { dummyProducts } from "dummyProducts"
import { fetchProducts, addProduct, deleteProduct } from "./operations"
import { I_ProductState } from "redux-store/types"

const initialState: I_ProductState = {
    allProducts: {
        items: dummyProducts,
        isLoading: false,
        error: null,
    },
    favorites: [],
    filter: "",
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        findProduct(state, action: PayloadAction<string>) {
            state.filter = action.payload
        },
        switchFavorites(state, action) {
            const productId = action.payload.id

            const checkFavorite = state.favorites.findIndex((product) => product.id === productId)

            if (checkFavorite !== -1) {
                state.favorites = state.favorites.filter((product) => product.id !== productId)
            } else {
                state.favorites.push(action.payload)
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
    whitelist: ["favorites"],
}

export const { findProduct, switchFavorites } = productsSlice.actions

export const persistProductsReducer = persistReducer<I_ProductState>(
    persistProductsConfig,
    productsSlice.reducer
)
