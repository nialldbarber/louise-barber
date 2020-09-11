import React, {FC} from 'react';
import type {AppProps} from 'next/app';
import {ThemeProvider} from 'styled-components';
import {AnimatePresence} from 'framer-motion';
import useDarkMode from 'hooks/useDarkMode';
import {getThemeMode} from 'utils/site-config';
import Header from 'components/header';
import Footer from 'components/footer';
import {GlobalStyle} from 'styles/global';

const App: FC<AppProps> = ({Component, pageProps}) => {
  const {theme, toggleTheme} = useDarkMode();
  const themeMode = getThemeMode(theme);

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <main>
          <Component {...pageProps} />
          {/* <button onClick={toggleTheme}>+</button> */}
        </main>
      </AnimatePresence>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
