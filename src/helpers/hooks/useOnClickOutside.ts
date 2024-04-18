import { MutableRefObject, useEffect } from "react"

const useOnClickOutside = (
    ref: MutableRefObject<HTMLElement | null>,
    toggleVisibility: () => void
) => {
    useEffect(() => {
        const listener = (e: MouseEvent | TouchEvent) => {
            // check if was clicked dropdownMenu
            if (!ref.current || !(e.target instanceof Node) || ref.current.contains(e.target))
                return

            // check if was clicked button
            if ((e.target as HTMLElement).getAttribute("data-id") === "user-avatar") return

            toggleVisibility()
        }

        document.addEventListener("mousedown", listener)
        document.addEventListener("touchstart", listener)

        return () => {
            document.removeEventListener("mousedown", listener)
            document.removeEventListener("touchstart", listener)
        }
    }, [toggleVisibility, ref])
}

export default useOnClickOutside
