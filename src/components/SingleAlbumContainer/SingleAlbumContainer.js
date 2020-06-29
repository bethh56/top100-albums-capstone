import React from 'react';
import PropTypes from 'prop-types';

import './SingleAlbumContainer.scss';
import Comment from '../Comments/Comment';
import commentsData from '../../helpers/data/commentsData';
import albumsData from '../../helpers/data/albumsData';
import CommentForm from '../CommentForm/CommentForm';

class SingleAlbumContainer extends React.Component {
  static propTypes = {
    viewSingleAlbum: PropTypes.func.isRequired,
  }

  state = {
    album: {},
    comment: [],
    formOpen: false,
  }

  getSingleViewInfo = () => {
    const { albumId } = this.props;
    albumsData.getSingleAlbum(albumId)
      .then((request) => {
        const album = request.data;
        this.setState({ album });
        commentsData.getCommentsByAlbumId(albumId)
          .then((comment) => this.setState({ comment }));
      })
      .catch((err) => console.error('unable to display single album', err));
  }

  componentDidMount() {
    this.getSingleViewInfo();
  }

  addComment = (newComment) => {
    commentsData.saveComment(newComment)
      .then(() => {
        this.getSingleViewInfo();
        this.setState({ formOpen: false });
      })
      .catch((err) => console.error('could not save new comment', err));
  }

  render() {
    const { viewSingleAlbum, albumId } = this.props;
    const { album, comment, formOpen } = this.state;

    const viewComment = comment.map((readComment) => <Comment key={readComment.id} comment={readComment} album={album}/>);

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
            <button className="btn btn-dark mt-3" onClick={() => this.setState({ formOpen: true })}>Add Comment</button>
            { formOpen ? <CommentForm addComment={this.addComment} albumId={albumId} comment={comment}/> : ''}
            {viewComment}
          </div>
        </div>
      </div>
    );
  }
}

export default SingleAlbumContainer;
