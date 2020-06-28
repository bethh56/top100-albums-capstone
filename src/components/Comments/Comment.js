import React from 'react';
import commentShape from '../../helpers/propz/commentShape';

import './Comment.scss';

class Comment extends React.Component {
  static propTypes = {
    comment: commentShape.commentShape,
  }

  render() {
    const { comment } = this.props;
    return (
      <div className="Comments pt-3">
        <p className="pt-3">{comment.comments}</p>
      </div>
    );
  }
}

export default Comment;
