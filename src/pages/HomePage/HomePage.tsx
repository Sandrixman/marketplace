import { Helmet } from "react-helmet"
import { useSelector } from "react-redux"
import { selectFilteredOutProducts } from "redux-store/products/selectors"
import ProductCard from "components/ProductCard"
import * as SC from "./styled"

const HomePage: React.FC = () => {
    const filteredOutProducts = useSelector(selectFilteredOutProducts)

    return (
        <>
            <Helmet>
                <title>Головна сторінка Marketplace</title>
            </Helmet>

            <SC.ProductsGroup>
                {filteredOutProducts.map((p) => (
                    <ProductCard {...p} key={p.id} />
                ))}
            </SC.ProductsGroup>
        </>
    )
}

export default HomePage
