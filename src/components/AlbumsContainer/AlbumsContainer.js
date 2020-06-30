import React from 'react';
import PropTypes from 'prop-types';

import AlbumCards from './AlbumCards/AlbumCards';
import albumsData from '../../helpers/data/albumsData';

import './AlbumsContainer.scss';
import userAlbumsData from '../../helpers/data/userAlbumsData';

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
    albumsData.getAlbums()
      .then((albums) => this.setState({ albums }))
      .catch((err) => console.error('unable to display albums', err));
  }

  getUserAlbums = () => {
    userAlbumsData.getUserAlbumsByUid()
      .then((userAlbums) => this.setState({ userAlbums }))
      .catch((err) => console.error('unable to get user albums'));
  }

  componentDidMount() {
    this.getAllAlbums();
    this.getUserAlbums();
  }

  addToUserAlbum = (albumId, updateListen) => {
    userAlbumsData.haveListenedToAlbum(albumId, updateListen)
      .then(() => {
        this.getUserAlbums();
      })
      .catch((err) => console.error('unable to update user album', err));
  }

  render() {
    const { albums } = this.state;
    const { viewSingleAlbum, authed } = this.props;

    const displayAlbums = albums.map((album) => <AlbumCards
    key={album.id}
    album={album}
    viewSingleAlbum={viewSingleAlbum}
    authed={authed}
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
