import { createGlobalStyle } from "styled-components";

import NotoSansKrThin from "./assets/font/NotoSansKR/NotoSansKR-Thin.otf";
import NotoSansKrRegular from "./assets/font/NotoSansKR/NotoSansKR-Regular.otf";
import NotoSansKrBold from "./assets/font/NotoSansKR/NotoSansKR-Bold.otf";
import LatoThin from "./assets/font/Lato/Lato-Thin.ttf";
import LatoRegular from "./assets/font/Lato/Lato-Regular.ttf";
import LatoBold from "./assets/font/Lato/Lato-Bold.ttf";

const GlobalStyle = createGlobalStyle`

// ---------- Font : S ---------- //

//한글
@font-face {
    font-family: 'NotoSansKR';
    src: url(${NotoSansKrThin}) format('opentype');
    font-weight: 100;
    unicode-range: U+AC00-D7A3;
}
@font-face {
    font-family: 'NotoSansKR';
    src: url(${NotoSansKrRegular}) format('opentype');
    font-weight: 400;
    unicode-range: U+AC00-D7A3;
}

@font-face {
    font-family: 'NotoSansKR';
    src: url(${NotoSansKrBold}) format('opentype');
    font-weight: 700;
    unicode-range: U+AC00-D7A3;
}

//나머지 (=영어,숫자,특문)
@font-face {
    font-family: 'Lato';
    src: url(${LatoThin}) format('truetype');
    font-weight: 100;
}
@font-face {
    font-family: 'Lato';
    src: url(${LatoRegular}) format('truetype');
    font-weight: 400;
}
@font-face {
    font-family: 'Lato';
    src: url(${LatoBold}) format('truetype');
    font-weight: 700;
}

html {
    font-family: 'NotoSansKR', 'Lato', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #333333;
}

// ---------- Font : E ---------- //

// ---------- Base : S ---------- //

*,*::after,*::before {
  box-sizing: border-box;
}

body {
  margin: 0;
}

form {
width: 100%;
}

ul,ol,dl {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

a {
  text-decoration: none;
}

a:-webkit-any-link {
  color: unset;
}

a:visited {
    color: unset;
}

h1,h2,h3,h4,h5,h6,p {
  margin: 0;
}

button {
  border: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
}

// ---------- Base : E ---------- //

`;

export default GlobalStyle;