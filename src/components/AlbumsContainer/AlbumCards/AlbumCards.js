import React from 'react';

import albumShape from '../../../helpers/propz/albumShape';
import authData from '../../../helpers/data/authData';
import './AlbumCards.scss';

class AlbumCards extends React.Component {
  state = {
    likes: false,
  }

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

  like = (e) => {
    e.preventDefault();
    const { album, updateUserAlbumLike } = this.props;
    const likeAlbum = {
      likes: true,
      albumId: album.userAlbum.albumId,
      uid: authData.getUid(),
    };
    updateUserAlbumLike(album.userAlbum.id, likeAlbum);
  }

  dislike = (e) => {
    e.preventDefault();
    const { album, updateUserAlbumLike } = this.props;
    const likeAlbum = {
      likes: false,
      albumId: album.userAlbum.albumId,
      uid: authData.getUid(),
    };
    updateUserAlbumLike(album.userAlbum.id, likeAlbum);
  }

  likeButtons = (e) => {
    const { album } = this.props;
    if (album.haveListened === true) {
      if (album.userAlbum.likes === true) {
        return <button className="unlikeAlbum" onClick={this.dislike}> <i className="fa fa-heart"></i></button>;
      }
      return <button className="likeAlbum" onClick={this.like}> <i className="fa fa-heart"></i></button>;
    }
    return '';
  }

  likeIconOnAlbum = (e) => {
    const { album } = this.props;
    if (album.haveListened === true) {
      if (album.userAlbum.likes === true) {
        return <p className="iconOnAlbum"><i className="fa fa-heart"></i></p>;
      }
      return '';
    }
    return '';
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
                <p className="genre">{album.position}</p>
            </div>
            <div className="albumDataFooter">
            <label> Listened to Album</label>
                <input
                  type="checkbox"
                  checked={album.haveListened}
                  id="haveListenedToAlbum"
                  onChange={this.updateAlbumListenStatus}
                />
            </div>
            {this.likeIconOnAlbum()}
            {this.likeButtons()}
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
