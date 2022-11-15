import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

import { useTheme } from "./hooks/useTheme";
import NotificationButton from "./components/NotificationButton";

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
