import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      main: string;
    };
    colors: {
      primary: string;
    };
  }
}
