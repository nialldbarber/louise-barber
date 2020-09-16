import React, {FC} from 'react';
import type {AppProps} from 'next/app';
import {ThemeProvider} from 'styled-components';
import {AnimatePresence} from 'framer-motion';
import {GlobalStyle} from 'styles/utils/global';
import {lightTheme} from 'styles/utils/style-state';

const App: FC<AppProps> = ({Component, pageProps}) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default App;
