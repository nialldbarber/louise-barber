import {createGlobalStyle} from 'styled-components';

const theme = {
  font: {
    main: "'Inter', sans-serif",
  },
  colors: {
    primary: '#0070f3',
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: inherit;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;

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
    font-family: ${({theme}) => theme.font.main};
  } 

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
    padding: 0;
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
`;

export {theme, GlobalStyle};
