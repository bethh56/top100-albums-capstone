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
      <div className="Comments pt-3">
        { uid === comment.uid
          ? <p className="pt-3">{comment.comments}</p>
          : ''
        }
      </div>
    );
  }
}

export default Comment;
