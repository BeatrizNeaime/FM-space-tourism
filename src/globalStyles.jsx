import { createGlobalStyle } from "styled-components";
import { colors } from "./styles/constants";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: ${colors.white};
    }

    body{
        background-color: ${colors.ocean};
    }
`