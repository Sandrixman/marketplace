import { Helmet } from "react-helmet"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { selectAllProducts, selectFavoritesId } from "redux-store/products/selectors"
import { ReactComponent as HeartEmpty } from "img/heart.svg"
import { ReactComponent as HeartFilled } from "img/heart-filled.svg"
import colors from "consts/colors"
import * as SC from "./styled"
import { switchFavorites } from "redux-store/products/slice"

const ProductDetailsPage: React.FC = () => {
    const { idOrSlug } = useParams()
    const dispatch = useDispatch()
    const allProducts = useSelector(selectAllProducts)
    const favoritesId = useSelector(selectFavoritesId)

    const currentProduct = allProducts.find((p) => [p.id, p.slug].includes(idOrSlug))

    const onFavorite = (productId: string) => {
        dispatch(switchFavorites(productId))
    }

    if (!currentProduct) {
        return <div>Товар не знайдено</div>
    }

    const { id, title, desc, imgSrc, priceRegular, priceDiscounted } = currentProduct

    const checkFavorite = favoritesId.includes(id)

    return (
        <>
            <Helmet>
                <title>ProductDetailsPage</title>
            </Helmet>

            <SC.HeartIconWrapper onClick={() => onFavorite(id)}>
                {checkFavorite ? (
                    <HeartFilled fill={colors.primary} />
                ) : (
                    <HeartEmpty fill={colors.primary} />
                )}
            </SC.HeartIconWrapper>
            <img src={imgSrc} alt={`Зображення ${currentProduct.title}`} />
            <SC.Div>{title}</SC.Div>
            <SC.Div>{priceRegular}</SC.Div>
            <SC.Div>{priceDiscounted}</SC.Div>
            <SC.Div>{desc}</SC.Div>
        </>
    )
}

export default ProductDetailsPage
