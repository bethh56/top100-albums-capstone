import React from 'react';

import albumShape from '../../../helpers/propz/albumShape';
import './AlbumCards.scss';

class AlbumCards extends React.Component {
  static propTypes = {
    album: albumShape.albumShape,
  }

  viewAlbum = (e) => {
    e.preventDefault();
    const { album, viewSingleAlbum } = this.props;
    viewSingleAlbum(album.id);
  }

  render() {
    const { album, authed } = this.props;

    return (
      <div className="AlbumCards col-sm-4 pb-3">
        {
          authed
            ? <div className="card albumCard" onClick={this.viewAlbum}>
             <img className="card-img-top albumImage" src={album.albumImage} alt=""/>
              <div className="albumData">
                <p className="albumName mt-2">{album.albumName}  ({album.releaseYear})</p>
                <p>By: {album.bandName}</p>
                <p>Genre: {album.genre}</p>
            </div>
          </div>
            : <div className="card albumCard">
              <img className="card-img-top albumImage" src={album.albumImage} alt=""/>
                <div className="albumData">
                <p className="albumName mt-2">{album.albumName}  ({album.releaseYear})</p>
                <p>By: {album.bandName}</p>
                <p>Genre: {album.genre}</p>
                </div>
              </div>
        }
       </div>
    );
  }
}

export default AlbumCards;
