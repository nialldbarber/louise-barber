import React, {FC} from 'react';
import type {AppProps} from 'next/app';
import dynamic from 'next/dynamic';
import {ThemeProvider} from 'styled-components';
import {AnimatePresence} from 'framer-motion';
import Header from 'components/header';
import Footer from 'components/footer';
import {theme, GlobalStyle} from 'styles/global';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});

const App: FC<AppProps> = ({Component, pageProps}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AnimatedCursor color="147,112,219" />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
