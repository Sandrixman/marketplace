export interface I_ProductState {
    allProducts: I_AllProductsState
    orders: string[]
    favoritesId: string[]
    notification: string[]
    cart: I_Product[]
    filter: string
}

export interface I_AllProductsState {
    items: I_Product[]
    isLoading: boolean
    error: string | {} | null
}

export interface I_Product {
    id: string
    slug?: string
    image: string
    price: number
    priceDiscounted?: number
    title: string
    description: string
    quantity?: number
}
