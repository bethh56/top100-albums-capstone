import React from 'react';

import './CommentForm.scss';
import authData from '../../helpers/data/authData';

class CommentForm extends React.Component {
  state= {
    comments: '',
  }

  commentAdd = (e) => {
    e.preventDefault();
    this.setState({ commentText: e.target.value });
  }

  submitComment = (e) => {
    e.preventDefault();
    const { commentText } = this.state;
    const { albumId, addComment } = this.props;
    const newComment = {
      albumId,
      comments: commentText,
      uid: authData.getUid(),
    };
    addComment(newComment);
  }

  render() {
    const { commentText } = this.state;
    return (
      <div className="CommentForm">
        <form>
        <div className="form-group">
          <label htmlFor="commentArea"></label>
          <textarea
          className="form-control"
          id="commentArea"
          rows="3"
          type="text"
          value={ commentText }
          onChange={this.commentAdd}
          ></textarea>
        </div>
        <button className="formSaveBtn" onClick={this.submitComment}>Save Comment</button>
        </form>
      </div>
    );
  }
}

export default CommentForm;
