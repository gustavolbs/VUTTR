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
  h1, h2, h3, h4, h5 {
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
  h3 {
    font-size: 30px;
    line-height: 36px;
  }
  h4 {
    font-size: 26px;
    line-height: 32px;
  }
  h5 {
    font-size: 24px;
    line-height: 30px;
  }
  /* .notification-error,
  .notification-success {
    display:flex;
  }
  .notification-error {
    background-color: ${colors.red};
    .notification-body:before {
      display: block;
      content: 'An error just happened!';
      font-weight: bold;
      margin-bottom: 5px;
    }
  }
  .notification-success {
    background-color: ${colors.green};
    .notification-body:before {
      display: block;
      content: 'This was a complete success!';
      font-weight: bold;
      margin-bottom: 5px;
    }
  }
  .notification-body {
    padding: 30px;
    font-size: 12px;
  } */
`;
