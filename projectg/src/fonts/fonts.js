import { createGlobalStyle } from "styled-components";
import NanumSquare_acB from "./NanumSquare_acB.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: "NanumSquare_acB";
        src: local("NanumSquare_acB"),
        url(${NanumSquare_acB}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
`;