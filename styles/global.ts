import {createGlobalStyle} from 'styled-components';
import {noBorderMixin, noMarginOrPaddingMixin} from 'styles/mixins';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'CocogooseProSemilight';
    src: url('/fonts/CocogooseProSemilight-trial.ttf');
    font-weight: 500;
    font-display: auto;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  html {
    box-sizing: border-box;    
  }

  body {
    ${noMarginOrPaddingMixin};
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
    line-height: 1.15;
    color: ${({theme}) => theme?.colors?.black};
    background: ${({theme}) => theme?.colors?.white};
  } 

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
    ${noMarginOrPaddingMixin};
  }

  input,
  textarea {
    ${noBorderMixin};
  }

  button {
    ${noBorderMixin};
    appearance: none;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

export {GlobalStyle};
