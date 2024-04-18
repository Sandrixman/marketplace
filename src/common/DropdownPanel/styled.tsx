import styled from "styled-components"

import { HEADER_HEIGHT, Z_INDEX_LEVEL_2 } from "consts"
import colors from "consts/colors"
import { paths } from "routes/helpers"
import { ReactComponent as FavoriteIcon } from "../img/heart.svg"

export const DropdownWrapper = styled.div`
    position: absolute;
    top: 70px;
    right: 20px;
    background-color: grey;
    color: #fff;
    padding: 10px;
`
