import { useDispatch, useSelector } from "react-redux"
import { ReactComponent as DarkIcon } from "./img/theme-dark.svg"
import { ReactComponent as LightIcon } from "./img/theme-light.svg"
import { selectTheme } from "redux-store/auth/selectors"
import { changeTheme } from "redux-store/auth/slice"

export const ThemeSwitcher = () => {
    const theme = useSelector(selectTheme)
    const dispatch = useDispatch()

    const toggleTheme = () => {
        dispatch(changeTheme(theme === "light" ? "dark" : "light"))
    }

    return <button onClick={toggleTheme}>{theme === "dark" ? <DarkIcon /> : <LightIcon />}</button>
}
