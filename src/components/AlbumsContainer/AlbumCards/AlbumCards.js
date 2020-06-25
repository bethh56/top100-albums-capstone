import React from 'react';

import './AlbumCards.scss';

class AlbumCards extends React.Component {
  render() {
    const { album } = this.props;

    return (
      <div className="AlbumCards col-4 pb-3">
        <div className="card albumCard">
        <img className="card-img-top albumImage" src={album.albumImage} alt=""/>
        <div className="albumData">
          <p>{album.albumName}</p>
          <p>{album.bandName}</p>
          <p>{album.releaseYear}</p>
          <p>{album.genre}</p>
        </div>
        </div>
      </div>
    );
  }
}

export default AlbumCards;
