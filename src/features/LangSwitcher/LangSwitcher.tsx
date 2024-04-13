import { useState } from "react"
import { useTranslation } from "react-i18next"

type LngRet = { [lng: string]: { nativeName: string } }

export const LangSwitcher = () => {
    const { t, i18n } = useTranslation("about")
    const [lngs, setLngs] = useState<LngRet>({
        en: { nativeName: "English" },
        ua: { nativeName: "Українська" },
    })

    return (
        <>
            <div>
                {Object.keys(lngs).map((lng) => (
                    <button
                        key={lng}
                        style={{ fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal" }}
                        type="submit"
                        onClick={() => {
                            i18n.changeLanguage(lng)
                        }}
                    >
                        {lngs[lng].nativeName}
                    </button>
                ))}
            </div>
            <h1>{t("About")}</h1>
        </>
    )
}
