import logo from '@assets/images/logo.svg';
import { Toggle } from '@comp/Toggle';
import React, { useState } from 'react';

import { useTheme } from '../../hooks/useTheme';
import { Container, ToggleContainer } from './styles';
import { LogoContainer } from './styles';

const Header: React.FC = () => {
  const { toggleTheme, theme } = useTheme();
  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === 'dark' ? true : false,
  );

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };

  return (
    <header>
      <Container>
        <ToggleContainer>
          <Toggle checked={darkTheme} onChange={handleChangeTheme} />
        </ToggleContainer>
        <LogoContainer>
          <img className="noSelect" src={logo} alt="Logo" />

          <h1>DSMeta</h1>
          <p>
            Desenvolvido por
            <a
              href="https://lucasspeixoto.github.io/profile/#/"
              target="_blank"
              rel="noreferrer"
            >
              @lspeixotodev
            </a>
          </p>
        </LogoContainer>
      </Container>
    </header>
  );
};

export default Header;
