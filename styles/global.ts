import {createGlobalStyle} from 'styled-components';
import {theme} from 'styles/style-state';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'CocogooseProSemilight';
    src: url('/fonts/CocogooseProSemilight-trial.ttf');
    font-weight: 500;
    font-display: auto;
    font-style: normal;
  }

  * {
    box-sizing: inherit;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    cursor: none;

    &:before, 
    &:after {
      box-sizing: inherit;
    }
  }

  html {
    box-sizing: border-box;
    line-height: 1.15;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'CocogooseProSemilight';
    color: ${({theme}) => theme?.colors?.black};
  } 

  a {
    text-decoration: none;
    color: ${({theme}) => theme?.colors?.black};
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  input,
  textarea {
    border: none;
    outline: none;
  }

  button {
    appearance: none;
    outline: none;
    border: none;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

export {theme, GlobalStyle};
