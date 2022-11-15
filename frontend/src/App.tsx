import NotificationButton from '@comp/NotificationButton';
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

        <NotificationButton></NotificationButton>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
