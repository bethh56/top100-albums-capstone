import React from 'react';
import AlbumCards from './AlbumCards/AlbumCards';

import './AlbumsContainer.scss';

class AlbumsContainer extends React.Component {
  render() {
    return (
      <div className="AlbumsContainer">
        <h1>Albums Container</h1>
        <AlbumCards />
      </div>
    );
  }
}

export default AlbumsContainer;
