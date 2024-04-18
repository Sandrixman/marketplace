import { Suspense, useEffect } from "react"
import { useDispatch } from "react-redux"
import { authOperations } from "redux-store/auth"
import { SerializedError } from "@reduxjs/toolkit"
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
