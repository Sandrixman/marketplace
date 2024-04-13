import { I_Store } from "../types"

export const selectIsLoggedIn = (state: I_Store) => state.auth.isLoggedIn

export const selectUser = (state: I_Store) => state.auth.user

export const selectIsRefreshing = (state: I_Store) => state.auth.isRefreshing

export const selectAuthLoading = (state: I_Store) => state.auth.isLoading

export const selectToken = (state: I_Store) => state.auth.token

export const selectTheme = (state: I_Store) => state.auth.theme
