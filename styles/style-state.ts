export const lightTheme = {
  font: {
    main: "'Ubuntu', sans-serif",
  },
  colors: {
    black: '#111',
    white: '#fff',
    purple: 'rgb(147,112,219)',
  },
  dimensions: {
    maxWidth: '1200px',
    headerHeight: '80px',
    footerHeight: '50px',
  },
  animation: {
    swoop: 'cubic-bezier(.215, .61, .355, 1)',
  },
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    black: '#fff',
    white: '#111',
  },
};
