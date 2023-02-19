import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;
}

body {
  display: flex;
  box-sizing:border-box ;
  width: 100vw;
  margin:0 ;
  padding:0 ;
  box-sizing:border-box ;
}

h1 {
  font-size: 3em;
  line-height: 1.1;
}

`;
