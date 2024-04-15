import { useState } from "react"
import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "redux-store/auth/selectors"
import { paths } from "routes/helpers"

import { LangSwitcher, ThemeSwitcher } from "features"
import DropdownPanel from "common/DropdownPanel"
import UserDropdownMenu from "./UserDropdownMenu"

import logo from "../img/logo.png"
import * as SC from "./styled"
import UserAvatar from "./UserAvatar"

const Header: React.FC = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const [serchInput, setSerchInput] = useState("")

    const changeSearchInput = (e: any) => {
        setSerchInput(e)
    }

    return (
        <>
            <SC.HeaderWrapper>
                <SC.Logo src={logo} alt="Логотип" />
                <button>Каталог</button>
                <input
                    type="text"
                    value={serchInput}
                    onChange={changeSearchInput}
                    placeholder="Пошук товарів"
                />
                {!isLoggedIn ? (
                    <>
                        <SC.BtnFavorites />
                        <DropdownPanel toggler={(toggleFn) => <UserAvatar onClick={toggleFn} />}>
                            <UserDropdownMenu />
                        </DropdownPanel>
                    </>
                ) : (
                    <SC.LoginLink to={paths.login}>Увійти</SC.LoginLink>
                )}
                {/* <ThemeSwitcher />
                <LangSwitcher /> */}
            </SC.HeaderWrapper>
        </>
    )
}

export default Header
