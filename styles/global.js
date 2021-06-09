import { createGlobalStyle } from "styled-components";
import { fonts } from "./pallete";
const GlobalStyles = createGlobalStyle`
* {
      box-sizing: border-box;
      font-family: ${fonts.type2};
      margin: 0;
      padding:0;
    }`;
export default GlobalStyles;
