import { ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { paths } from "routes/helpers"
import { selectIsLoggedIn } from "redux-store/auth/selectors"
import { selectFavorites, selectFilter } from "redux-store/products/selectors"

import { LangSwitcher, ThemeSwitcher } from "features"
import DropdownPanel from "common/DropdownPanel"
import UserDropdownMenu from "./UserDropdownMenu"
import UserAvatar from "./UserAvatar"

import logo from "../img/logo.png"
import * as SC from "./styled"
import { findProduct } from "redux-store/products/slice"

const Header: React.FC = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const favorites = useSelector(selectFavorites)
    const filter = useSelector(selectFilter)

    const dispatch = useDispatch()

    const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.currentTarget.value
        dispatch(findProduct(inputValue))
    }

    return (
        <>
            <SC.HeaderWrapper>
                <SC.Logo src={logo} alt="Логотип" />
                <button>Каталог</button>
                <input
                    type="text"
                    value={filter}
                    onChange={handleFilter}
                    placeholder="Пошук товарів"
                />
                {!isLoggedIn ? (
                    <>
                        <SC.BtnFavorites count={favorites.length} />
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
