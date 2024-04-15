import { useNavigate } from "react-router-dom"
import { useCallback } from "react"
import { useSelector } from "react-redux"
import { selectUser } from "redux-store/auth/selectors"
import { paths } from "routes/helpers"

import * as SC from "./styled"

const UserDropdownMenu: React.FC = () => {
    const navigate = useNavigate()
    const { nameFirst, nameLast, displayName } = useSelector(selectUser)

    const handleLogout = useCallback(() => navigate(paths.logout), [navigate])

    return (
        <>
            <SC.UserDropdownMenu>
                <strong>{displayName || nameFirst + "" + nameLast}</strong>

                <SC.UserProfileDropdown>
                    <div>Замовлення</div>
                    <div>Обране</div>
                    <div>Довідка</div>
                    <div>Налаштування</div>
                </SC.UserProfileDropdown>

                <div onClick={handleLogout}>Вийти</div>
            </SC.UserDropdownMenu>
        </>
    )
}

export default UserDropdownMenu
