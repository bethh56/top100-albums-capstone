import React from 'react';

import './AlbumCards.scss';

class AlbumCards extends React.Component {
  render() {
    const { album } = this.props;

    return (
      <div className="AlbumCards col-4">
        <div className="card">
        <img className="card-img-top" src={album.albumImage} alt=""/>
        <h3>{album.albumName}</h3>
        <h3>{album.bandName}</h3>
        <h3>{album.releaseYear}</h3>
        <h3>{album.genre}</h3>
        </div>
      </div>
    );
  }
}

export default AlbumCards;
