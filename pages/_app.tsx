import React, {FC} from 'react';
import type {AppProps} from 'next/app';
import {ThemeProvider} from 'styled-components';
import {AnimatePresence} from 'framer-motion';
import Header from '../components/header';
import Footer from '../components/footer';
import {theme, GlobalStyle} from '../styles/global';

const App: FC<AppProps> = ({Component, pageProps}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
