import { lazy } from "react"
import { Route, Routes, Navigate, useLocation } from "react-router-dom"
import { checkPathMatch, paths } from "./helpers"

const AccountSettingPage = lazy(() => import("pages/AccountSettingPage"))

const PrivateRoutes: React.FC = () => {
    const location = useLocation()

    const isMatch = checkPathMatch(location.pathname, paths)

    return (
        <Routes>
            <Route path={paths.accountSettings} element={<AccountSettingPage />} />
            <Route path="*" element={!isMatch ? <Navigate to={paths.home} /> : null} />
        </Routes>
    )
}

export default PrivateRoutes
