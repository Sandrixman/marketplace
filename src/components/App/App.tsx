import { Suspense, useEffect } from "react"
import { useDispatch } from "react-redux"
import { productsOperations } from "redux-store/products"
import PrivateRoutes from "routes/PrivateRoutes"
import PublicRoutes from "routes/PublicRoutes"
import Header from "components/Header"
import { AppStyles, Footer, PageWrapper } from "./GlobalStyle"

const App = () => {
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(authOperations.refreshUser() as any)
    //         .then((response: any) => {
    //             if (response.payload.message) {
    //                 console.log(response.payload.message)
    //             }
    //         })
    //         .catch((error: SerializedError) => {
    //             console.error("refreshUser Error", error.message)
    //         })
    // }, [dispatch])

    useEffect(() => {
        dispatch(productsOperations.fetchProducts() as any)
    }, [dispatch])

    return (
        <Suspense fallback="Loading...">
            <AppStyles />

            <Header />

            <PageWrapper>
                <Suspense fallback="Loading...">
                    <PrivateRoutes />
                    <PublicRoutes />
                </Suspense>
            </PageWrapper>

            <Footer>
                <div>© Marketplace</div>
            </Footer>
        </Suspense>
    )
}

export default App
