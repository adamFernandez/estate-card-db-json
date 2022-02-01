import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;900&display=swap');  

  * {
      box-sizing: border-box;
  }

  body {
    font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
    font-family: 'Roboto', sans-serif;
    background-color: #494965;
  }

  h1,h2,h3, p {
    margin: 0;
  }
  div {
    margin: .3em 0;
  }
`;