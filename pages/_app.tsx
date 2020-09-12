import React, {FC} from 'react';
import type {AppProps} from 'next/app';
import {ThemeProvider} from 'styled-components';
import {AnimatePresence} from 'framer-motion';
import {GlobalStyle} from 'styles/global';
import {lightTheme} from 'styles/style-state';

const App: FC<AppProps> = ({Component, pageProps, router}) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default App;
