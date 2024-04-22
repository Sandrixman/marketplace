import { Helmet } from "react-helmet"
import { useSelector } from "react-redux"
import { selectCart } from "redux-store/products/selectors"
import CartProduct from "components/CartProduct"
import * as SC from "./styled"

const CartPage: React.FC = () => {
    const isCartProducts = useSelector(selectCart).length
    const cartProducts = useSelector(selectCart)

    return (
        <>
            <Helmet>
                <title>Favorite products Marketplace</title>
            </Helmet>

            {isCartProducts ? (
                <SC.ProductsGroup>
                    {cartProducts.map((p) => (
                        <CartProduct {...p} key={p.id} />
                    ))}
                </SC.ProductsGroup>
            ) : (
                <div>Поки що в корзині нічого немає</div>
            )}
        </>
    )
}

export default CartPage
