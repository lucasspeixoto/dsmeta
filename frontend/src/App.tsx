import NotificationButton from '@comp/NotificationButton';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { useTheme } from './hooks/useTheme';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  const { theme } = useTheme();

  const test = () => {
    console.log('Testeee');
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <NotificationButton onClick={test}></NotificationButton>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
