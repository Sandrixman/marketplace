import styled from "styled-components"

import { HEADER_HEIGHT, Z_INDEX_LEVEL_2 } from "consts"
import colors from "consts/colors"
import { ReactComponent as FavoriteIcon } from "img/heart.svg"

export const HeaderWrapper = styled.div`
    padding: 14px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.primary};
    color: #fff;
    height: ${HEADER_HEIGHT}px;
    z-index: ${Z_INDEX_LEVEL_2};
`

export const Logo = styled.img`
    width: 150px;
    height: 60px;
`

export const BtnFavorites = styled((props: any) => {
    return (
        <div {...props}>
            <FavoriteIcon />
        </div>
    )
})`
    position: relative;
    svg {
        cursor: pointer;
    }
    &:after {
        content: "${(props) => props.count}";
        background-color: ${colors.countTag};
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
