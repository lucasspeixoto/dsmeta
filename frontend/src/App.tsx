import Header from '@comp/Header';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { useTheme } from './hooks/useTheme';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  const { theme } = useTheme();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Header></Header>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
