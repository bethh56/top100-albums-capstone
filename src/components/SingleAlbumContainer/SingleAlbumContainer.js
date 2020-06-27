import React from 'react';
import PropTypes from 'prop-types';

import './SingleAlbumContainer.scss';
import albumsData from '../../helpers/data/albumsData';

class SingleAlbumContainer extends React.Component {
  static propTypes = {
    viewSingleAlbum: PropTypes.func.isRequired,
  }

  state = {
    album: {},
  }

  componentDidMount() {
    const { albumId } = this.props;
    albumsData.getSingleAlbum(albumId)
      .then((request) => {
        const album = request.data;
        this.setState({ album });
      })
      .catch((err) => console.error('unable to display single album', err));
  }

  render() {
    const { viewSingleAlbum } = this.props;
    const { album } = this.state;

    return (
      <div className="SingleAlbumContainer container">
        <button className="btn btn-danger" onClick={() => { viewSingleAlbum(''); }}>X</button>
        <div className="row">
          <div className="col-sm-6">
            <img className="card-img-top albumImage" src={album.albumImage} alt=""/>
          </div>
          <div className="col-sm-6">
            <h3>Band Name: {album.bandName}</h3>
            <h3>Album Name: {album.albumName}</h3>
            <h3>Release Year: {album.releaseYear}</h3>
            <h3>Genre: {album.genre}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleAlbumContainer;
