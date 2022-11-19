import React from 'react';
import { DiJava, DiReact } from 'react-icons/di';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <footer>
      <Container>
        <p>Desenvolvido com</p>
        <DiReact size={56} />
        <DiJava size={56} />
      </Container>
    </footer>
  );
};

export default Footer;
