import React from 'react';

import './Comment.scss';

class Comment extends React.Component {
  deleteComment = (e) => {
    e.preventDefault();
    const { comment, removeComment } = this.props;
    removeComment(comment.id);
  }

  render() {
    const { comment } = this.props;
    return (
      <div className="Comments">
         <p className="commentText"> <button className="deleteCommentBtn" onClick={this.deleteComment}>X</button> {comment.comments}</p>
      </div>
    );
  }
}

export default Comment;
