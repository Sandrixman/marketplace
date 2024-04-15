export interface I_User {
    nameFirst: string | null
    nameLast?: string | null
    displayName?: string | null
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
    nameFirst: string
    nameLast?: string
    displayName?: string
    email: string
    password: string
}

export interface I_LoginCredentials {
    email: string
    password: string
}

export interface I_AuthResponse {
    user: {
        nameFirst: string
    }
    token: string
}
