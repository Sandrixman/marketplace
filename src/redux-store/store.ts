import { configureStore } from "@reduxjs/toolkit"
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist"
import { persistAuthReducer } from "./auth/slice"
import { persistProductsReducer } from "./products/slice"

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
