import { useEffect } from "react"

const useOnClickOutside = (ref: any, handler: any) => {
    useEffect(() => {
        console.log(ref)

        const listener = (e: MouseEvent | TouchEvent) => {
            if (!ref.current || ref.current.contains(e.target)) return
            handler()
        }

        document.addEventListener("mousedown", listener)
        document.addEventListener("touchstart", listener)

        return () => {
            document.removeEventListener("mousedown", listener)
            document.removeEventListener("touchstart", listener)
        }
    }, [handler, ref])
}

export default useOnClickOutside
