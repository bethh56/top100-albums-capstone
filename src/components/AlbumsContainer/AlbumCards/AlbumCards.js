import React from 'react';
import PropTypes from 'prop-types';

import albumShape from '../../../helpers/propz/albumShape';
import authData from '../../../helpers/data/authData';
import './AlbumCards.scss';

class AlbumCards extends React.Component {
  state = {
    haveListened: false,
  }

   static propTypes = {
     album: albumShape.albumShape,
     userAlbum: PropTypes.func.isRequired,
   }

  viewAlbum = (e) => {
    e.preventDefault();
    const { album, viewSingleAlbum } = this.props;
    viewSingleAlbum(album.id);
  }

  haveListenedCheckbox = (e) => {
    this.setState({ haveListened: e.target.checked });
  }

  updateAlbumListenStatus = (e) => {
    e.preventDefault();
    const { album, addToUserAlbum } = this.props;
    const { haveListened } = this.state;
    if (haveListened) {
      const updateListen = {
        albumId: album.id,
        uid: authData.getUid(),
      };
      addToUserAlbum(album.id, updateListen);
    }
  }

  render() {
    const { album, authed } = this.props;
    const { haveListened } = this.state;

    return (
      <div className="AlbumCards col-4 pb-3">
        {
          authed
            ? <div className="card albumCard" style={{ border: haveListened ? '0.5vw solid #72D58F' : '' }}>
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
                  checked={haveListened}
                  id="haveListenedToAlbum"
                  onChange={this.haveListenedCheckbox}
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
