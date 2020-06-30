import React from 'react';
import authData from '../../helpers/data/authData';

import './Comment.scss';

class Comment extends React.Component {
  deleteComment = (e) => {
    e.preventDefault();
    const { comment, removeComment } = this.props;
    removeComment(comment.id);
  }

  render() {
    const { comment } = this.props;
    const uid = authData.getUid();
    return (
      <div className="Comments">
        { uid === comment.uid
          ? <p className="commentText">- {comment.comments} <button className="btn btn-danger" onClick={this.deleteComment}>X</button> </p>
          : ''
        }
      </div>
    );
  }
}

export default Comment;
