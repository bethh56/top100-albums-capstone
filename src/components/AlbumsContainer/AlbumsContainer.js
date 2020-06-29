import React from 'react';
import PropTypes from 'prop-types';

import AlbumCards from './AlbumCards/AlbumCards';
import albumsData from '../../helpers/data/albumsData';

import './AlbumsContainer.scss';

class AlbumsContainer extends React.Component {
  static propTypes = {
    viewSingleAlbum: PropTypes.func.isRequired,
    authed: PropTypes.bool.isRequired,
  }

  state = {
    albums: [],
  }

  componentDidMount() {
    albumsData.getAlbums()
      .then((albums) => this.setState({ albums }))
      .catch((err) => console.error('unable to display albums', err));
  }

  render() {
    const { albums } = this.state;
    const { viewSingleAlbum, authed } = this.props;

    const displayAlbums = albums.map((album) => <AlbumCards key={album.id} album={album} viewSingleAlbum={viewSingleAlbum} authed={authed}/>);

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
