import React from 'react';
import PropTypes from 'prop-types';

import AlbumCards from './AlbumCards/AlbumCards';
import authData from '../../helpers/data/authData';

import './AlbumsContainer.scss';
import userAlbumsData from '../../helpers/data/userAlbumsData';
import smash from '../../helpers/data/smash';

class AlbumsContainer extends React.Component {
  static propTypes = {
    viewSingleAlbum: PropTypes.func.isRequired,
    authed: PropTypes.bool.isRequired,
  }

  state = {
    albums: [],
    userAlbums: [],
  }

  getAllAlbums = () => {
    const uid = authData.getUid();
    smash.getAlbumsWithUserInfo(uid)
      .then((albums) => this.setState({ albums }))
      .catch((err) => console.error('unable to display albums', err));
  }

  componentDidMount() {
    this.getAllAlbums();
  }

  addToUserAlbum = (newListen) => {
    userAlbumsData.saveListenedAlbum(newListen)
      .then(() => {
        this.getAllAlbums();
      })
      .catch((err) => console.error('unable to update user album', err));
  }

  deleteUserAlbum = (userAlbumId) => {
    userAlbumsData.deleteListenedAlbum(userAlbumId)
      .then(() => {
        this.getAllAlbums();
      })
      .catch((err) => console.error('unable to remove user album', err));
  }

  updateUserAlbumLike = (userAlbumId, like) => {
    userAlbumsData.updatedLikeOnUserAlbum(userAlbumId, like)
      .then(() => {
        this.getAllAlbums();
      })
      .catch((err) => console.error('unable to like user album', err));
  }

  render() {
    const { albums, userAlbums } = this.state;
    const { viewSingleAlbum, authed } = this.props;

    albums.sort((a, b) => a.position - b.position);

    const displayAlbums = albums.map((album) => <AlbumCards
    key={album.id}
    album={album}
    viewSingleAlbum={viewSingleAlbum}
    authed={authed}
    userAlbums={userAlbums}
    addToUserAlbum={this.addToUserAlbum}
    deleteUserAlbum={this.deleteUserAlbum}
    updateUserAlbumLike={this.updateUserAlbumLike}
    />);

    return (
      <div className="AlbumsContainer container">
        <div className="d-flex flex-wrap pt-4">
        { displayAlbums }
        </div>
      </div>
    );
  }
}

export default AlbumsContainer;
