import React from 'react';

import albumShape from '../../../helpers/propz/albumShape';
import authData from '../../../helpers/data/authData';
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

  updateAlbumListenStatus = (e) => {
    e.preventDefault();
    const { addToUserAlbum, album } = this.props;
    console.error(e.target.checked);
    if (e.target.checked) {
      const addListen = {
        albumId: album.id,
        uid: authData.getUid(),
      };
      addToUserAlbum(addListen);
    }
  }

  render() {
    const { album, authed } = this.props;

    return (
      <div className="AlbumCards col-4 pb-3">
        {
          authed
            ? <div className="card albumCard" style={{ border: album.haveListened ? '0.5vw solid #72D58F' : '' }}>
             <img className="card-img-top albumImage" src={album.albumImage} alt=""/>
                <div className="albumData" onClick={this.viewAlbum}>
                <p className="albumName mt-2">{album.albumName}  ({album.releaseYear})</p>
                <p>By: {album.bandName}</p>
                <p>Genre: {album.genre}</p>
            </div>
            <div className="albumDataFooter">
            <label className="mr-1"> Listened to Album</label>
                <input
                  type="checkbox"
                  checked={album.haveListened}
                  id="haveListenedToAlbum"
                  onChange={this.updateAlbumListenStatus}
                />
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
