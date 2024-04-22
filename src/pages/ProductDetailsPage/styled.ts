import colors from "consts/colors"
import styled from "styled-components"

export const ProductDetails = styled.div`
    display: flex;
    gap: 50px;
`

export const Image = styled.img`
    width: 40%;
`

export const ProductInfo = styled.div`
    width: 50%;
`

export const Title = styled.h1``

export const TradeBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 10px;
    border-top: 1px dashed lightgray;
    border-bottom: 1px dashed lightgray;
`

export const PriceWrapper = styled.div``

export const Price = styled.div`
    color: ${colors.accent};
    font-size: 26px;
    font-weight: 600;
`

export const PriceDiscounted = styled.div`
    font-size: 16px;
    text-decoration: line-through;
`

export const HeartIconWrapper = styled.div`
    svg {
        width: 30px;
        height: 30px;
    }
`

export const MainBtn = styled.button`
    padding: 5px 20px;
    background-color: ${colors.primary};
    color: #fff;
    border: none;
    border-radius: 5px;
`

export const Desc = styled.div`
    padding: 10px;
`
