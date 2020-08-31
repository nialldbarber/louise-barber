import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      main: string;
    },
    colors: {
      black: string;
      white: string;
      purple: string;
    },
    dimensions: {
      headerHeight: string,
      footerHeight: string,
    },
    animation: {
      swoop: string;
    }
  }
}
