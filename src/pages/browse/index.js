import React from 'react';
import {
  Container, Title, List, Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>
    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/81GtprxyiRL._SX355_.jpg"
          alt="Cover"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial.</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/81GtprxyiRL._SX355_.jpg"
          alt="Cover"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial.</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/81GtprxyiRL._SX355_.jpg"
          alt="Cover"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial.</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/81GtprxyiRL._SX355_.jpg"
          alt="Cover"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial.</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
