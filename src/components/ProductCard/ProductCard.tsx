import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { switchFavorites } from "redux-store/products/slice"
import { selectFavorites } from "redux-store/products/selectors"

import colors from "consts/colors"
import { ReactComponent as HeartEmpty } from "../img/heart.svg"
import { ReactComponent as HeartFilled } from "../img/heart-filled.svg"
import { I_Product } from "redux-store/types"
import * as SC from "./styled"

const ProductCard: React.FC<I_Product> = (product) => {
    const dispatch = useDispatch()
    const favorites = useSelector(selectFavorites)

    const checkFavorite = favorites.findIndex((favorite) => favorite.id === product.id)

    const onFavorite = (product: I_Product) => {
        dispatch(switchFavorites(product))
    }

    const onCart = () => {
        toast.success("added to cart", {
            position: "top-center",
            autoClose: 2000,
        })
    }

    return (
        <SC.ProductCard>
            <SC.HeartIconWrapper onClick={() => onFavorite(product)}>
                {checkFavorite === -1 ? (
                    <HeartEmpty fill={colors.primary} />
                ) : (
                    <HeartFilled fill={colors.primary} />
                )}
            </SC.HeartIconWrapper>
            <Link to={`/product/${product.slug || product.id}`}>
                <SC.CardImg src={product.imgSrc} alt={`Зображення ${product.title}`} />
            </Link>
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
            <SC.CardBtn onClick={onCart}>В кошик</SC.CardBtn>
        </SC.ProductCard>
    )
}

export default ProductCard
