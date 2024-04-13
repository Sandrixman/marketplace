import { useState } from "react"
import { useSelector } from "react-redux"
import { Wrapper } from "./styled"
import { selectIsLoggedIn } from "redux-store/auth/selectors"
import { LangSwitcher, ThemeSwitcher } from "features"

const Header: React.FC = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const [serchInput, setSerchInput] = useState("")

    return (
        <>
            <Wrapper>
                <div>HomePage</div>

                <ThemeSwitcher />
                <LangSwitcher />
            </Wrapper>
        </>
    )
}

export default Header
