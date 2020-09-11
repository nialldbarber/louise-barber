import {createGlobalStyle} from 'styled-components';
import {noBorderMixin, noMarginOrPaddingMixin} from 'styles/mixins';

const GlobalStyle = createGlobalStyle`
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

  .main-nav {
    z-index: 2;

    button {
      svg {
        path {
          stroke: ${({theme}) => theme?.colors?.black};
          transition: .45s ease;
        }
      }

      &.open {  
        svg {
          path {
            stroke: ${({theme}) => theme?.colors?.white};
          }
        }
      }
    }
  }

  .nav-background {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: ${({theme}) => theme?.colors?.black};
  }

  .menu-toggle {
    position: absolute;
    right: 2rem;
    top: 3.1rem;
    background: none;
  }
`;

export {GlobalStyle};
