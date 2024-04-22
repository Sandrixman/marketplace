import { ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { paths } from "routes/helpers"
import { selectIsLoggedIn } from "redux-store/auth/selectors"
import {
    selectOrders,
    selectCart,
    selectFavoritesId,
    selectNotification,
    selectFilter,
} from "redux-store/products/selectors"
import { ReactComponent as CatalogIcon } from "img/catalog.svg"

import { LangSwitcher, ThemeSwitcher } from "features"
import DropdownPanel from "common/DropdownPanel"
import UserDropdownMenu from "./UserDropdownMenu"
import UserAvatar from "./UserAvatar"

import logo from "img/logo.png"
import * as SC from "./styled"
import { findProduct } from "redux-store/products/slice"

const Header: React.FC = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const orders = useSelector(selectOrders)
    const favoritesId = useSelector(selectFavoritesId)
    const cart = useSelector(selectCart)
    const notification = useSelector(selectNotification)
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
                <SC.CatalogBtn>
                    <CatalogIcon />
                    Каталог
                </SC.CatalogBtn>
                <SC.SearchWrapper>
                    <SC.SearchInput
                        type="text"
                        value={filter}
                        onChange={handleFilter}
                        placeholder="Пошук товарів"
                    />
                    <SC.SearchBtn>Знайти</SC.SearchBtn>
                </SC.SearchWrapper>
                {isLoggedIn ? (
                    <>
                        <SC.IconWrapper>
                            <Link to={paths.orders}>
                                <SC.BtnOrders count={orders.length} />
                            </Link>
                            <Link to={paths.favorites}>
                                <SC.BtnFavorites count={favoritesId.length} />
                            </Link>
                            <Link to={paths.notification}>
                                <SC.BtnBell count={notification.length} />
                            </Link>
                            <Link to={paths.cart}>
                                <SC.BtnCart count={cart.length} />
                            </Link>
                        </SC.IconWrapper>
                        <DropdownPanel toggler={(toggleFn) => <UserAvatar onClick={toggleFn} />}>
                            <UserDropdownMenu />
                        </DropdownPanel>
                    </>
                ) : (
                    <Link to={paths.login}>
                        <SC.LoginBtn>Увійти</SC.LoginBtn>
                    </Link>
                )}
                {/* <ThemeSwitcher />
                <LangSwitcher /> */}
            </SC.HeaderWrapper>
        </>
    )
}

export default Header
