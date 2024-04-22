import styled from "styled-components"

import { HEADER_HEIGHT, Z_INDEX_LEVEL_2 } from "consts"
import colors from "consts/colors"

import { ReactComponent as OrdersIcon } from "img/box.svg"
import { ReactComponent as FavoriteIcon } from "img/heart.svg"
import { ReactComponent as BellIcon } from "img/notification-bell.svg"
import { ReactComponent as CartIcon } from "img/shopping-cart.svg"
import SearchIcon from "img/search.svg"

export const HeaderWrapper = styled.div`
    padding: 14px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    background-color: ${colors.primary};
    color: #fff;
    height: ${HEADER_HEIGHT}px;
    z-index: ${Z_INDEX_LEVEL_2};
`

export const Logo = styled.img`
    width: 150px;
    height: 60px;
`

export const CatalogBtn = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: ${colors.accent};
    color: #fff;
    padding: 5px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        background-color: ${colors.primaryHover};
    }
`

export const SearchWrapper = styled.div`
    position: relative;
    flex-grow: 1;
`

export const SearchInput = styled.input`
    width: 100%;
    padding: 5px 15px;
    border-radius: 5px;
    border: none;
    padding-left: 40px;
    background-image: url(${SearchIcon});
    background-repeat: no-repeat;
    background-position: 12px;
    &:focus-visible {
        outline: ${colors.primary} auto 10px;
    }
`

export const SearchBtn = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 80px;
    padding: 5px 15px;
    background-color: green;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
`

export const IconWrapper = styled.div`
    display: flex;
    gap: 20px;
`

interface ButtonProps {
    count?: number
}

const ButtonWithCounter = styled.div<ButtonProps>`
    position: relative;
    svg {
        cursor: pointer;
    }
    &:hover {
        scale: 1.1;
    }
    &:after {
        content: "${(props) => props.count}";
        background-color: ${colors.accent};
        color: #fff;
        position: absolute;
        top: -8px;
        right: -10px;
        width: 18px;
        height: 18px;
        font-size: 12px;
        border-radius: 50%;
        display: ${({ count }) => (count ? "flex" : "none")};
        justify-content: center;
        align-items: center;
    }
`

export const BtnOrders = styled((props: ButtonProps) => {
    return (
        <ButtonWithCounter {...props}>
            <OrdersIcon />
        </ButtonWithCounter>
    )
})``

export const BtnFavorites = styled((props: ButtonProps) => {
    return (
        <ButtonWithCounter {...props}>
            <FavoriteIcon />
        </ButtonWithCounter>
    )
})``

export const BtnBell = styled((props: ButtonProps) => {
    return (
        <ButtonWithCounter {...props}>
            <BellIcon />
        </ButtonWithCounter>
    )
})``

export const BtnCart = styled((props: ButtonProps) => {
    return (
        <ButtonWithCounter {...props}>
            <CartIcon />
        </ButtonWithCounter>
    )
})``

export const LoginBtn = styled.button`
    color: ${colors.primary};
    background-color: #fff;
    padding: 5px 15px;
    font-weight: 600;
    border-radius: 5px;
    border: none;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        color: #fff;
        background-color: ${colors.primaryHover};
    }
`
