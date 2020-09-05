import {lightTheme, darkTheme} from 'styles/style-state';
import {LIGHT_MODE} from 'constants/theme';

function getThemeMode(theme: string) {
  return theme === LIGHT_MODE ? lightTheme : darkTheme;
}

function getCurrentYear(): number {
  const date: Date = new Date();
  return date.getFullYear();
}

export {getThemeMode, getCurrentYear};
