import React from 'react';
import commentShape from '../../helpers/propz/commentShape';
import authData from '../../helpers/data/authData';

import './Comment.scss';

class Comment extends React.Component {
  static propTypes = {
    comment: commentShape.commentShape,
  }

  render() {
    const { comment } = this.props;
    const uid = authData.getUid();
    return (
      <div className="Comments">
        { uid === comment.uid
          ? <p className="commentText">- {comment.comments} <button>Delete</button> </p>
          : ''
        }
      </div>
    );
  }
}

export default Comment;
