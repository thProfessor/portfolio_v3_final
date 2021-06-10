import { createGlobalStyle } from "styled-components";
import { fonts, primary } from "./pallete";
const GlobalStyles = createGlobalStyle`
* {
      box-sizing: border-box;
      margin: 0;
      padding:0;
    };
body{
  font-family: ${fonts.type3};
  color:${primary.black};
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}`;
export default GlobalStyles;
