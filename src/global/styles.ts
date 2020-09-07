import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root{
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body,  #___gatsby {
    width: 100%;
    min-height: 100%;
  }

  body {
    background: rgba(230, 232, 239, 0.4);
    -webkit-font-smoothing: antialiased !important;
  }

  body, button, input, textarea, select, option, ::placeholder {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.8rem !important;
    color: #6E44FF;
  }


  body, button, input, textarea, label, select, option, ::placeholder {
    font-size: 1.6rem;
  }

  a, button{
    -webkit-tap-highlight-color: transparent !important;
  }
`

export default GlobalStyles
