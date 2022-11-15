import logo from '@assets/images/logo.svg';
import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => (
  <header>
    <Container>
      <img src={logo} alt="Logo" />
      <h1>DSMeta</h1>
      <p>
        Desenvolvidor por
        <a
          href="https://lucasspeixoto.github.io/profile/#/"
          target="_blank"
          rel="noreferrer"
        >
          @lspeixotodev
        </a>
      </p>
    </Container>
  </header>
);

export default Header;
