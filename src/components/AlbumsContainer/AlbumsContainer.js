import React from 'react';
import AlbumCards from './AlbumCards/AlbumCards';
import albumsData from '../../helpers/data/albumsData';

import './AlbumsContainer.scss';

class AlbumsContainer extends React.Component {
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
    const displayAlbums = albums.map((album) => <AlbumCards key={album.id} album={album}/>);

    return (
      <div className="AlbumsContainer container">
        <h1>Top 100 Albums</h1>
        <div className="d-flex flex-wrap">
        { displayAlbums }
        </div>
      </div>
    );
  }
}

export default AlbumsContainer;
