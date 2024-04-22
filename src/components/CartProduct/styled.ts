import colors from "consts/colors"
import styled from "styled-components"

export const HeartIconWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    svg {
        cursor: pointer;
    }
`

export const ProductCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 200px;
    height: 300px;
    overflow: hidden;
`

export const CardImgWrapper = styled.div`
    width: 80%;
    align-self: center;
`

export const CardImg = styled.img`
    width: 100%;
    margin-bottom: 10px;
    cursor: pointer;
`

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
`

export const PriceWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 10px;
`

export const CardPrice = styled.div`
    color: ${colors.accent};
    font-size: 16px;
    font-weight: 600;
`

export const CardDiscount = styled.div`
    text-decoration: line-through;
`

export const CardTitle = styled.h2`
    height: 35px;
    color: ${colors.primary};
    font-size: 14px;
    text-align: center;
    cursor: pointer;
`
export const CardDesc = styled.p`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

export const CardBtnWrapper = styled.div`
    display: flex;
    gap: 10px;
`

export const CardBtn = styled.button`
    width: 100%;
    padding: 5px 15px;
    color: #fff;
    background-color: ${colors.primary};
    border: none;
    border-radius: 5px;
    cursor: pointer;
`
