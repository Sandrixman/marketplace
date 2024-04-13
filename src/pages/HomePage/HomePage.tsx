import { Helmet } from "react-helmet"
import { dummyProducts } from "dummyProducts"
import { ProductsGroup } from "./styled"

import ProductCard from "blocks/ProductCard"

const HomePage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Головна сторінка Marketplace</title>
            </Helmet>

            <ProductsGroup>
                {dummyProducts.map((p) => (
                    <ProductCard {...p} key={p.id} />
                ))}
            </ProductsGroup>
        </>
    )
}

export default HomePage
