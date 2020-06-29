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
        <button className="returnToHome" onClick={() => { viewSingleAlbum(''); }}>Return to Home</button>
        <div className="row">
          <div className="col-md-4">
            <img className="card-img-top SingleAlbumImage" src={album.albumImage} alt=""/>
          </div>
          <div className="col-md-8 singleAlbumData pt-2">
            <h3>{album.bandName}</h3>
            <h4>{album.albumName} ({album.releaseYear}) </h4>
            <h5>Genre: {album.genre}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleAlbumContainer;
