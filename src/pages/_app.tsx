import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { astropayDarkTheme } from 'styles/theme/dark/material-theme-dark';
import { astropayLightTheme } from 'styles/theme/light/material-theme-light';
import 'styles/_styles.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(astropayLightTheme);
  const changeTheme = () => {
    setTheme(astropayDarkTheme);
  };
  return (
    <>
      {/* Aca puedo poner mi layout de pg */}
      <h1>hola desde _app</h1>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme />
          <button onClick={changeTheme}>Dark Theme</button>
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

export default MyApp;
