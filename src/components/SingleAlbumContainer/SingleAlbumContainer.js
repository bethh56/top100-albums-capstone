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
            <button className="btn btn-dark mt-3">Add Comment</button>
            {viewComment}
          </div>
        </div>
      </div>
    );
  }
}

export default SingleAlbumContainer;
