import React from 'react';
import PropTypes from 'prop-types';

import albumShape from '../../../helpers/propz/albumShape';
import './AlbumCards.scss';

class AlbumCards extends React.Component {
  static propTypes = {
    album: albumShape.albumShape,
    viewSingleAlbum: PropTypes.func.isRequired,
  }

  viewAlbum = (e) => {
    e.preventDefault();
    const { album, viewSingleAlbum } = this.props;
    viewSingleAlbum(album.id);
    console.error(album.id);
  }

  render() {
    const { album } = this.props;

    return (
      <div className="AlbumCards col-4 pb-3">
        <div className="card albumCard" onClick={this.viewAlbum}>
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
