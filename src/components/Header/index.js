import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placehoulder="Pesquisar..." />
    </Search>
    <User>
      <img src="https://avatars2.githubusercontent.com/u/1439940?v=4" alt="Avatar" />
      Maique Almeida
    </User>
  </Container>
);

export default Header;
