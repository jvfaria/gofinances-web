import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Link className="link-header" to="/">
          Listagem
          <hr />
        </Link>
        <Link className="link-header" to="/import">
          Importar
          <hr />
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;
