import {useState, useEffect} from 'react';
import {LIGHT_MODE, DARK_MODE, THEME} from 'constants/theme';

// taken from this source: https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/
const useDarkMode = () => {
  const [theme, setTheme] = useState<string>('');

  function setMode(mode: string): void {
    window.localStorage.setItem(THEME, mode);
    setTheme(mode);
  }

  function toggleTheme(): void {
    if (theme === LIGHT_MODE) {
      setMode(DARK_MODE);
    } else {
      setMode(LIGHT_MODE);
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem(THEME);
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setMode(LIGHT_MODE);
    }
  }, []);

  return {theme, toggleTheme};
};

export default useDarkMode;
