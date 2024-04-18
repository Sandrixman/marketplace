import { ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { paths } from "routes/helpers"
import { selectIsLoggedIn } from "redux-store/auth/selectors"
import { selectFavoritesId, selectFilter } from "redux-store/products/selectors"

import { LangSwitcher, ThemeSwitcher } from "features"
import DropdownPanel from "common/DropdownPanel"
import UserDropdownMenu from "./UserDropdownMenu"
import UserAvatar from "./UserAvatar"

import logo from "img/logo.png"
import * as SC from "./styled"
import { findProduct } from "redux-store/products/slice"

const Header: React.FC = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const favoritesId = useSelector(selectFavoritesId)
    const filter = useSelector(selectFilter)

    const dispatch = useDispatch()

    const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.currentTarget.value
        dispatch(findProduct(inputValue))
    }

    return (
        <>
            <SC.HeaderWrapper>
                <Link to={paths.home}>
                    <SC.Logo src={logo} alt="Логотип" />
                </Link>
                <button>Каталог</button>
                <input
                    type="text"
                    value={filter}
                    onChange={handleFilter}
                    placeholder="Пошук товарів"
                />
                {!isLoggedIn ? (
                    <>
                        <Link to={paths.favorites}>
                            <SC.BtnFavorites count={favoritesId.length} />
                        </Link>
                        <DropdownPanel toggler={(toggleFn) => <UserAvatar onClick={toggleFn} />}>
                            <UserDropdownMenu />
                        </DropdownPanel>
                    </>
                ) : (
                    <Link to={paths.login}>Увійти</Link>
                )}
                {/* <ThemeSwitcher />
                <LangSwitcher /> */}
            </SC.HeaderWrapper>
        </>
    )
}

export default Header
