import axios, { AxiosError } from "axios"
import { createAsyncThunk, SerializedError } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import {
    I_AuthResponse,
    I_RegisterCredentials,
    I_LoginCredentials,
    I_Store,
} from "redux-store/types"

axios.defaults.baseURL = "https://connections-api.herokuapp.com/"

const setAuthHeader = (token: string) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = ""
}

export const register = createAsyncThunk<
    I_AuthResponse,
    I_RegisterCredentials,
    { rejectValue: SerializedError }
>("auth/register", async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post("/users/signup", credentials)
        setAuthHeader(data.token)
        toast.success(`${data.user.name} successfully registered`, {
            position: "top-center",
            autoClose: 3000,
        })
        return data
    } catch (error: any) {
        if (error instanceof Error) {
            const axiosError = error as AxiosError
            const response = axiosError.response
            if (typeof response === "string") {
                const object = JSON.parse(response)
                object.errors?.name &&
                    toast.error(`${object.errors.name.message}`, {
                        position: "top-center",
                        autoClose: 2000,
                    })
                object.errors?.email &&
                    toast.error(`${object.errors.email.message}`, {
                        position: "top-center",
                        autoClose: 2000,
                    })
                object.errors?.password &&
                    toast.error(`${object.errors.password.message}`, {
                        position: "top-center",
                        autoClose: 2000,
                    })
            }
        } else {
            console.error("Unknown error occurred")
        }

        return thunkAPI.rejectWithValue(error.message)
    }
})

export const logIn = createAsyncThunk<
    I_AuthResponse,
    I_LoginCredentials,
    { rejectValue: SerializedError }
>("auth/login", async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post("/users/login", credentials)
        setAuthHeader(data.token)
        return data
    } catch (error: any) {
        toast.error("Incorrect login or password", {
            position: "top-center",
            autoClose: 2000,
        })
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const logOut = createAsyncThunk<void, void, { rejectValue: SerializedError }>(
    "auth/logout",
    async (_, thunkAPI) => {
        try {
            await axios.post("/users/logout")
            clearAuthHeader()
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const refreshUser = createAsyncThunk<I_AuthResponse, void, { rejectValue: SerializedError }>(
    "auth/refresh",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState() as I_Store
        const persistedToken = state.auth.token

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue({
                message: "Unable to fetch user",
            })
        }

        try {
            setAuthHeader(persistedToken)
            const { data } = await axios.get<I_AuthResponse>("/users/current")
            return data
        } catch (error: any) {
            return thunkAPI.rejectWithValue({
                message: error.message,
            })
        }
    }
)
