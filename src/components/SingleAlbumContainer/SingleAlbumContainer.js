import React from 'react';
import PropTypes from 'prop-types';

import './SingleAlbumContainer.scss';
import Comment from '../Comments/Comment';
import smash from '../../helpers/data/smash';

class SingleAlbumContainer extends React.Component {
  static propTypes = {
    viewSingleAlbum: PropTypes.func.isRequired,
  }

  state = {
    album: {},
    comment: [],
  }

  getSingleViewInfo = () => {
    const { albumId } = this.props;
    smash.getCommentByUidAndAlbumId(albumId)
      .then((album) => {
        this.setState({ album });
      })
      .catch((err) => console.error('unable to display single album', err));
  }

  componentDidMount() {
    this.getSingleViewInfo();
  }

  render() {
    const { viewSingleAlbum } = this.props;
    const { album, comment } = this.state;

    const viewComment = comment.map((readComment) => <Comment key={readComment.id} comment={readComment}/>);

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
            <button className="btn btn-dark mt-3">Add Comment</button>
            {viewComment}
          </div>
        </div>
      </div>
    );
  }
}

export default SingleAlbumContainer;
