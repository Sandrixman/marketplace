export interface I_User {
    name: string | null
    email?: string | null
}

export interface I_AuthState {
    user: I_User
    token: string | null
    theme: "light" | "dark"
    isLoggedIn: boolean
    isRefreshing: boolean
    isLoading: boolean
}
export interface I_Store {
    auth: I_AuthState
}

export interface I_RegisterCredentials {
    name: string
    email: string
    password: string
}

export interface I_LoginCredentials {
    email: string
    password: string
}

export interface I_AuthResponse {
    user: {
        name: string
    }
    token: string
}
