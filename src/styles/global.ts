import { createGlobalStyle } from "styled-components";

import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        width: 100%;
        height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased; 
        scroll-behavior: smooth;
        background: ${theme.colors.grey_50};
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
    }

    h1 {
        font-weight: ${theme.fonts.weight.bold};
    }

    ul {
        list-style: none;
    }

    a {
        cursor: pointer;
    }
    
    button {
        cursor: pointer;
    }
`;

export default GlobalStyle;
