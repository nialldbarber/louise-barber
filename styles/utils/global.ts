import {createGlobalStyle} from 'styled-components';
import {noBorderMixin, noMarginOrPaddingMixin} from 'styles/utils/mixins';

const GlobalStyle = createGlobalStyle`
  @font-face {	
    font-family: 'ModernSans-Light';
    src: url('/fonts/ModernSans-Light.otf');
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
    font-family: ${({theme}) => theme?.font?.main};
    font-size: 16px;
    font-weight: bold;
    line-height: 1.15;
    color: ${({theme}) => theme?.colors?.black};
    background: ${({theme}) => theme?.colors?.white};
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
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

  .nav-background {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: ${({theme}) => theme?.colors?.black};
  }
`;

export {GlobalStyle};
