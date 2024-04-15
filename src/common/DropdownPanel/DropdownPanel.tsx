import React, { useRef, useState } from "react"
import useOnClickOutside from "helpers/hooks/useOnClickOutside"
import * as SC from "./styled"

interface DropdownPanelProps {
    children: React.ReactElement
    toggler: (toggleFn: () => void) => React.ReactNode
}

const DropdownPanel: React.FC<DropdownPanelProps> = ({ children, toggler }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false)

    const dropdownRef = useRef(null)

    const toggleVisibility = () => setIsVisible((isVisible) => !isVisible)

    useOnClickOutside(dropdownRef, toggleVisibility)

    return (
        <>
            {toggler(toggleVisibility)}

            {isVisible && <SC.DropdownWrapper ref={dropdownRef}>{children}</SC.DropdownWrapper>}
        </>
    )
}

export default DropdownPanel
