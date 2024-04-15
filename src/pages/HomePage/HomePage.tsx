import { Helmet } from "react-helmet"
import { dummyProducts } from "dummyProducts"
import ProductCard from "components/ProductCard"
import * as SC from "./styled"

const HomePage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Головна сторінка Marketplace</title>
            </Helmet>

            <SC.ProductsGroup>
                {dummyProducts.map((p) => (
                    <ProductCard {...p} key={p.id} />
                ))}
            </SC.ProductsGroup>
        </>
    )
}

export default HomePage
