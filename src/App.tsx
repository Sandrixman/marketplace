import PrivateRoutes from "routes/PrivateRoutes"
import PublicRoutes from "routes/PublicRoutes"

const App = () => {
    return (
        <>
            <PrivateRoutes />
            <PublicRoutes/>
        </>
    )
}

export default App
