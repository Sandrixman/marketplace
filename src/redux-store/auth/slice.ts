import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { register, logIn, logOut, refreshUser } from "./operations"
import { I_AuthResponse, I_AuthState, I_User } from "../types"

const initialState: I_AuthState = {
    user: { name: null, email: null },
    token: null,
    theme: "light",
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: (create) => ({
        changeTheme: create.preparedReducer(
            (text: "light" | "dark") => {
                return { payload: text }
            },
            (state, action) => {
                state.theme = action.payload
            }
        ),
    }),
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(
                register.fulfilled,
                (state, action: PayloadAction<{ user: I_User; token: string }>) => {
                    state.user = action.payload.user
                    state.token = action.payload.token
                    state.isLoggedIn = true
                    state.isLoading = false
                }
            )
            .addCase(register.rejected, (state) => {
                state.isLoading = false
            })
            .addCase(logIn.pending, (state) => {
                state.isLoading = true
            })
            .addCase(
                logIn.fulfilled,
                (state, action: PayloadAction<{ user: I_User; token: string }>) => {
                    state.user = action.payload.user
                    state.token = action.payload.token
                    state.isLoggedIn = true
                    state.isLoading = false
                }
            )
            .addCase(logIn.rejected, (state) => {
                state.isLoading = false
            })
            .addCase(logOut.fulfilled, (state) => {
                state.user = { name: null, email: null }
                state.token = null
                state.isLoggedIn = false
            })
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true
            })
            .addCase(refreshUser.fulfilled, (state, action: PayloadAction<I_AuthResponse>) => {
                state.user = { name: action.payload.user.name }
                state.isLoggedIn = true
                state.isRefreshing = false
            })
            .addCase(refreshUser.rejected, (state) => {
                state.isRefreshing = false
            })
    },
})

const persistAuthConfig = {
    key: "auth",
    storage,
    whitelist: ["token"],
}

export const { changeTheme } = authSlice.actions

export const persistAuthReducer = persistReducer<I_AuthState>(persistAuthConfig, authSlice.reducer)
