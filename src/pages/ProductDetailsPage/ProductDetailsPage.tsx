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

    const currentProduct = allProducts.find((p) => {
        return [p.id.toString(), p.slug].includes(idOrSlug)
    })

    const onFavorite = (productId: string) => {
        dispatch(switchFavorites(productId))
    }

    if (!currentProduct) {
        return <div>Товар не знайдено</div>
    }

    const { id, title, description, image, price, priceDiscounted } = currentProduct

    const checkFavorite = favoritesId.includes(id)

    return (
        <>
            <Helmet>
                <title>ProductDetailsPage</title>
            </Helmet>

            <SC.ProductDetails>
                <SC.Image
                    src={`${process.env.REACT_APP_API_URL}/images/products/${image}`}
                    alt={`Зображення ${currentProduct.title}`}
                />
                <SC.ProductInfo>
                    <SC.Title>{title}</SC.Title>
                    <SC.TradeBlock>
                        <SC.PriceWrapper>
                            {priceDiscounted && (
                                <SC.PriceDiscounted>{priceDiscounted} ₴</SC.PriceDiscounted>
                            )}
                            <SC.Price>{price} ₴</SC.Price>
                        </SC.PriceWrapper>
                        <SC.HeartIconWrapper onClick={() => onFavorite(id)}>
                            {checkFavorite ? (
                                <HeartFilled fill={colors.primary} />
                            ) : (
                                <HeartEmpty fill={colors.primary} />
                            )}
                        </SC.HeartIconWrapper>
                        <SC.MainBtn>Купити</SC.MainBtn>
                    </SC.TradeBlock>
                    <SC.Desc>{description}</SC.Desc>
                </SC.ProductInfo>
            </SC.ProductDetails>
        </>
    )
}

export default ProductDetailsPage
