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

export const CardImg = styled.img`
    width: 90%;
    margin-bottom: 10px;
    cursor: pointer;
`

export const CardInfo = styled.div``

export const PriceWrapper = styled.div`
    display: flex;
    gap: 10px;
`

export const CardPrice = styled.div`
    color: ${colors.primary};
    font-size: 16px;
    font-weight: 600;
`

export const CardDiscount = styled.div`
    text-decoration: line-through;
`

export const CardTitle = styled.h3`
    height: 35px;
    color: ${colors.primary};
    font-size: 14px;
    cursor: pointer;
`
export const CardDesc = styled.p`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

export const CardBtn = styled.button`
    padding: 5px 15px;
    color: #fff;
    background-color: ${colors.primary};
    border: none;
    border-radius: 5px;
    cursor: pointer;
`
