import {useState, useEffect} from 'react';
import {LIGHT_MODE, DARK_MODE, THEME} from 'constants/theme';

const useDarkMode = () => {
  const [theme, setTheme] = useState<string>(DARK_MODE);

  const toggleTheme = () => {
    if (theme === LIGHT_MODE) {
      window.localStorage.setItem(THEME, DARK_MODE);
      setTheme(DARK_MODE);
    } else {
      window.localStorage.setItem(THEME, LIGHT_MODE);
      setTheme(LIGHT_MODE);
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem(THEME);
    localTheme && setTheme(localTheme);
  }, [theme]);

  return {theme, toggleTheme};
};

export default useDarkMode;
