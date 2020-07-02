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
    console.error(e.target.checked);
    const { addToUserAlbum, album, deleteUserAlbum } = this.props;
    if (e.target.checked) {
      const addListen = {
        likes: false,
        albumId: album.id,
        uid: authData.getUid(),
      };
      addToUserAlbum(addListen);
    } else {
      deleteUserAlbum(album.userAlbum.id);
    }
  }

  updateLikes = (e) => {
    e.preventDefault();
    console.error(e.target.checked);
    const { album, updateUserAlbumLike } = this.props;
    const likeAlbum = {
      likes: true,
      albumId: album.id,
      uid: authData.getUid(),
    };
    updateUserAlbumLike(album.id, likeAlbum);
  }

  render() {
    const { album, authed } = this.props;

    return (
      <div className="AlbumCards col-4 pb-3">
        {
          authed
            ? <div className="card albumCard" style={{ border: album.haveListened ? '0.7vw solid #72D58F' : '' }}>
             <img className="card-img-top albumImage" src={album.albumImage} alt=""/>
                <div className="albumData" onClick={this.viewAlbum}>
                <p className="bandName">{album.bandName}</p>
                <p className="albumName">{album.albumName}  ({album.releaseYear})</p>
                <p className="genre">Genre: {album.genre}</p>
            </div>
            <div className="albumDataFooter">
            <label className="mr-1"> Listened to Album</label>
                <input
                  type="checkbox"
                  checked={album.haveListened}
                  id="haveListenedToAlbum"
                  onChange={this.updateAlbumListenStatus}
                />
                <label className="mr-1"> Likes Album </label>
                <input
                  type="checkbox"
                  checked={album.selectedUserAlbum}
                  id="likesAlbum"
                  onChange={this.updateLikes}
                />
            </div>
            <button className="likeAlbum"><i className="fa fa-heart"></i></button>
          </div>
            : <div className="card albumCard">
              <img className="card-img-top albumImage" src={album.albumImage} alt=""/>
                <div className="albumData">
                <p className="albumName mt-2">{album.albumName}  ({album.releaseYear})</p>
                <p>{album.bandName}</p>
                <p>Genre: {album.genre}</p>
                </div>
              </div>
        }
       </div>
    );
  }
}

export default AlbumCards;
