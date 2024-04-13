import { Suspense } from "react"

import PrivateRoutes from "routes/PrivateRoutes"
import PublicRoutes from "routes/PublicRoutes"
import Header from "blocks/Header/Header"

import { AppStyles, Footer, PageWrapper } from "./GlobalStyle"

const App = () => {
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
