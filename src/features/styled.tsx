import styled from "styled-components"

import { HEADER_HEIGHT, Z_INDEX_LEVEL_2 } from "consts"
import colors from "consts/colors"

export const Wrapper = styled.div`
    padding: 14px 20px;
    display: flex;
    align-items: center;
    background-color: ${colors.primary};
    color: #fff;
    transition: margin 2s ease-out;
    height: ${HEADER_HEIGHT}px;
    z-index: ${Z_INDEX_LEVEL_2};
`
