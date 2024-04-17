import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { I_Product } from "redux-store/types"

export const fetchProducts = createAsyncThunk("products/fetchAll", async (_, thunkAPI) => {
    try {
        const { data } = await axios.get("/products")
        return data
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const addProduct = createAsyncThunk<I_Product, I_Product>(
    "products/addProduct",
    async (product, thunkAPI) => {
        try {
            const response = await axios.post("/products", product)
            toast.success(`${product.title} is added`, {
                position: "top-center",
                autoClose: 2000,
            })
            return response.data
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const deleteProduct = createAsyncThunk(
    "products/deleteProduct",
    async (productId, thunkAPI) => {
        try {
            const { data } = await axios.delete(`/products/${productId}`)
            toast.warning(`${data.title} deleted`, {
                position: "top-center",
                autoClose: 1000,
            })
            return data
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
