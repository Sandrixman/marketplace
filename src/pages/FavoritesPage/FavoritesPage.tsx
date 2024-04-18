import { Helmet } from "react-helmet"
import { useSelector } from "react-redux"
import { selectFavoritetProducts, selectFavoritesId } from "redux-store/products/selectors"
import ProductCard from "components/ProductCard"
import * as SC from "./styled"

const FavoritesPage: React.FC = () => {
    const favoriteProducts = useSelector(selectFavoritetProducts)
    const isFavorites = useSelector(selectFavoritesId).length

    return (
        <>
            <Helmet>
                <title>Favorite products Marketplace</title>
            </Helmet>

            {isFavorites ? (
                <SC.ProductsGroup>
                    {favoriteProducts.map((p) => (
                        <ProductCard {...p} key={p.id} />
                    ))}
                </SC.ProductsGroup>
            ) : (
                <div>Поки що в улюбленному нічого немає</div>
            )}
        </>
    )
}

export default FavoritesPage
