export interface I_ProductState {
    allProducts: I_AllProductsState
    favoritesId: string[]
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
    imgSrc: string
    priceRegular: number
    priceDiscounted?: number
    title: string
    desc: string
}
