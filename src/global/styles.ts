import { createGlobalStyle } from "styled-components";
import Montserrat from "../fonts/Montserrat-VariableFont_wght.ttf";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%; // 10px/16px = 62.5% -> 1rem = 10px
    font-family: 'Montserrat', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.colors["gray/50"]};
  }

  // increase performance rather google fonts link html
  @font-face {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    src: url(${Montserrat}) format('truetype');
    font-display: swap;
  }
`;

export default GlobalStyle;
