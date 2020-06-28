import React from 'react';

import albumShape from '../../../helpers/propz/albumShape';
import UserAlbums from '../../UserAlbums/UserAlbums';
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
      <div className="AlbumCards col-4 pb-3">
        {
          authed
            ? <div className="card albumCard">
             <img className="card-img-top albumImage" src={album.albumImage} alt=""/>
              <div className="albumData" onClick={this.viewAlbum}>
                <p>{album.albumName}</p>
                <p>{album.bandName}</p>
                <p>{album.releaseYear}</p>
                <p>{album.genre}</p>
            </div>
            <div className="albumDataFooter">
              <UserAlbums />
            </div>
          </div>
            : <div className="card albumCard">
              <img className="card-img-top albumImage" src={album.albumImage} alt=""/>
                <div className="albumData">
                  <p>{album.albumName}</p>
                  <p>{album.bandName}</p>
                  <p>{album.releaseYear}</p>
                  <p>{album.genre}</p>
                </div>
              </div>
        }
       </div>
    );
  }
}

export default AlbumCards;
