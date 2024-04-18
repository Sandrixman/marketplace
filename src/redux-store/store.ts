import { configureStore } from "@reduxjs/toolkit"
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist"
import { persistAuthReducer } from "./auth/slice"
import { persistProductsReducer } from "./products/slice"
import { I_AuthState } from "types/auth/types"
import { I_ProductState } from "types/products/types"

export interface I_Store {
    auth: I_AuthState
    products: I_ProductState
}

export const store = configureStore({
    reducer: {
        auth: persistAuthReducer,
        products: persistProductsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)
