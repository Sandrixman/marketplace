import { useState } from "react"
import { Link } from "react-router-dom"
import colors from "consts/colors"
import { ReactComponent as HeartEmpty } from "../img/heart.svg"
import { ReactComponent as HeartFilled } from "../img/heart-filled.svg"
import * as SC from "./styled"

interface ProductCardProps {
    id: string
    slug?: string
    title: string
    desc: string
    imgSrc: string
    priceRegular: number
    priceDiscounted?: number
}

const ProductCard: React.FC<ProductCardProps> = ({
    id,
    slug,
    title,
    desc,
    imgSrc,
    priceRegular,
    priceDiscounted,
}) => {
    const [favorite, setFavorite] = useState(false)

    const onFavorite = () => {
        setFavorite(!favorite)
    }

    const onCart = () => {
        console.log("added to cart")
    }

    return (
        <SC.ProductCard>
            <SC.HeartIconWrapper onClick={onFavorite}>
                {!favorite ? (
                    <HeartEmpty fill={colors.primary} />
                ) : (
                    <HeartFilled fill={colors.primary} />
                )}
            </SC.HeartIconWrapper>
            <Link to={`/product/${slug || id}`}>
                <SC.CardImg src={imgSrc} alt={`Зображення ${title}`} />
            </Link>
            <SC.PriceWrapper>
                <SC.CardPrice>{priceRegular} ₴</SC.CardPrice>
                {priceDiscounted && <SC.CardDiscount>{priceDiscounted} ₴</SC.CardDiscount>}
            </SC.PriceWrapper>
            <Link to={`/product/${slug || id}`}>
                <SC.CardTitle>{title}</SC.CardTitle>
            </Link>
            <SC.CardDesc>{desc}</SC.CardDesc>
            <SC.CardBtn onClick={onCart}>В кошик</SC.CardBtn>
        </SC.ProductCard>
    )
}

export default ProductCard
