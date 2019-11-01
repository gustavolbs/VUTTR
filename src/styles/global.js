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

  h1 {
    font-size: 2.625rem;
    line-height: 50px;
    font-weight: 500;
    padding-bottom: 1rem;
  }

  h2 {
    font-size: 1.625rem;
    line-height: 40px;
    font-weight: 500;
  }

  @media screen and (max-width: 490px) {
    header h1 {
      font-size: 2.425rem;
    }

    header h2 {
      font-size: 1.425rem;
    }
  }

  @media screen and (max-width: 436px) {
    header h1 {
      font-size: 2.225rem;
    }

    header h2 {
      font-size: 1.225rem;
    }
  }
`;
