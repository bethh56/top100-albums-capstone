import React from 'react';
import PropTypes from 'prop-types';

import AlbumCards from './AlbumCards/AlbumCards';
import albumsData from '../../helpers/data/albumsData';
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

  // getUserAlbums = () => {
  //   const { albumId } = this.props;
  //   albumsData.getSingleAlbum(albumId)
  //     .then((request) => {
  //       const album = request.data;
  //       console.error(album);
  //       this.setState({ album });
  //       userAlbumsData.getUserAlbumsByAlbumId(albumId)
  //         .then((userAlbums) => this.setState({ userAlbums }))
  //         .catch((err) => console.error('unable to get user albums'));
  //     });
  // }

  componentDidMount() {
    this.getAllAlbums();
    // this.getUserAlbums();
  }

  addToUserAlbum = (newListen) => {
    userAlbumsData.saveListenedAlbum(newListen)
      .then(() => {
        this.getAllAlbums();
      })
      .catch((err) => console.error('unable to update user album', err));
  }

  render() {
    const { albums, userAlbums } = this.state;
    const { viewSingleAlbum, authed } = this.props;

    const displayAlbums = albums.map((album) => <AlbumCards
    key={album.id}
    album={album}
    viewSingleAlbum={viewSingleAlbum}
    authed={authed}
    userAlbums={userAlbums}
    addToUserAlbum={this.addToUserAlbum}
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
