import React, {FC} from 'react';
import type {AppProps} from 'next/app';
import dynamic from 'next/dynamic';
import {ThemeProvider} from 'styled-components';
import {AnimatePresence} from 'framer-motion';
import useDarkMode from 'hooks/useDarkMode';
import Header from 'components/header';
import Footer from 'components/footer';
import {GlobalStyle} from 'styles/global';
import {lightTheme, darkTheme} from 'styles/style-state';
import {LIGHT_MODE} from 'constants/theme';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});

const App: FC<AppProps> = ({Component, pageProps}) => {
  const {theme, toggleTheme} = useDarkMode();
  const themeMode = theme === LIGHT_MODE ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <AnimatedCursor color="147,112,219" />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <>
          <Component {...pageProps} />
          <button onClick={toggleTheme}>+</button>
        </>
      </AnimatePresence>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
