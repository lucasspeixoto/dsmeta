import React, { createContext, useMemo, useState } from 'react';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

export interface IThemeContext {
  toggleTheme(): void;
  theme: ITheme;
}

interface ITheme {
  title: string;

  colors: {
    primary: string;
    secondary: string;
    tertiary: string;

    white: string;
    black: string;
    grey: string;

    success: string;
    info: string;
    warning: string;

    balance: string;
    entries: string;
    outflows: string;
    generic: string;
    recurring: string;
    eventual: string;

    thead: string;
  };

  gradients: {
    header: string;
  };
}

export interface IThemeProvider {
  children: React.ReactNode;
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeProvider: React.FC<IThemeProvider> = ({ children }) => {
  const lastSelectedTheme = useMemo(() => {
    return localStorage.getItem('@dsmeta:theme');
  }, []);

  const [theme, setTheme] = useState<ITheme>(
    lastSelectedTheme === 'light' ? light : dark,
  );

  const toggleTheme = () => {
    if (theme.title === 'dark') {
      setTheme(light);
      localStorage.setItem('@dsmeta:theme', 'light');
    } else {
      setTheme(dark);
      localStorage.setItem('@dsmeta:theme', 'dark');
    }
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
