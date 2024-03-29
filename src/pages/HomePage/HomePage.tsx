import { Helmet } from "react-helmet"
import { Div } from "./styled"

const HomePage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Головна сторінка Marketplace</title>
            </Helmet>

            <Div>HomePage</Div>
        </>
    )
}

export default HomePage
