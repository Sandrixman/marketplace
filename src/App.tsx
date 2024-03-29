import { Suspense } from "react"

import PrivateRoutes from "routes/PrivateRoutes"
import PublicRoutes from "routes/PublicRoutes"
import Header from "features/Header"
import { AppStyles, Footer, PageWrapper } from "App.styled"

const App = () => {
    return (
        <>
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
        </>
    )
}

export default App
