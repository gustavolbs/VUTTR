/**
 * Definição de uma estilização global para a aplicação.
 */
import { createGlobalStyle } from 'styled-components';

import colors from './color';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    color: ${colors.ink};
    background-color: ${colors.darkWhite};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, textarea {
    font-family: 'Source Sans Pro', sans-serif !important;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }

  a, button {
    outline: none;
  }

  h1, h2 {
    padding: 12px 0;
  }

  h1 {
    font-size: 42px;
    line-height: 50px;
  }

  h2 {
    font-size: 36px;
    line-height: 40px;
  }
`;
