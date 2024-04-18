import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useMemo } from "react"
import { useLocation } from "react-router-dom"
import { switchFavorites } from "redux-store/products/slice"
import { selectFavoritesId } from "redux-store/products/selectors"

import colors from "consts/colors"
import { ReactComponent as HeartEmpty } from "img/heart.svg"
import { ReactComponent as HeartFilled } from "img/heart-filled.svg"
import { I_Product } from "types/products/types"
import * as SC from "./styled"

const ProductCard: React.FC<I_Product> = (product) => {
    const dispatch = useDispatch()
    const favoritesId = useSelector(selectFavoritesId)
    const location = useLocation()

    // checking for render the extra button
    const isFavoritePage = useMemo(() => location.pathname === "/favorites", [location.pathname])

    const checkFavorite = favoritesId.includes(product.id)

    const onFavorite = (productId: string) => {
        dispatch(switchFavorites(productId))
    }

    const onCart = () => {}

    return (
        <SC.ProductCard>
            <SC.HeartIconWrapper onClick={() => onFavorite(product.id)}>
                {checkFavorite ? (
                    <HeartFilled fill={colors.primary} />
                ) : (
                    <HeartEmpty fill={colors.primary} />
                )}
            </SC.HeartIconWrapper>
            <Link to={`/products/${product.slug || product.id}`}>
                <SC.CardImg src={product.imgSrc} alt={`Зображення ${product.title}`} />
            </Link>
            <SC.CardInfo>
                <SC.PriceWrapper>
                    <SC.CardPrice>{product.priceRegular} ₴</SC.CardPrice>
                    {product.priceDiscounted && (
                        <SC.CardDiscount>{product.priceDiscounted} ₴</SC.CardDiscount>
                    )}
                </SC.PriceWrapper>
                <Link to={`/product/${product.slug || product.id}`}>
                    <SC.CardTitle>{product.title}</SC.CardTitle>
                </Link>
                <SC.CardDesc>{product.desc}</SC.CardDesc>
                {isFavoritePage ? (
                    <>
                        <SC.CardBtn onClick={onCart}>В кошик</SC.CardBtn>
                        <SC.CardBtn onClick={onCart}>Видалити</SC.CardBtn>
                    </>
                ) : (
                    <SC.CardBtn onClick={onCart}>В кошик</SC.CardBtn>
                )}
            </SC.CardInfo>
        </SC.ProductCard>
    )
}

export default ProductCard
