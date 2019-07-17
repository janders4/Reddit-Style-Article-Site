import React, { Component } from "react";
import "../styles/postComment.css";

class PostComment extends Component {
  render() {
    return (
      <div className="postCommentForm">
        <form>
          <label htmlFor="comment">Add Comment:</label>
          <textarea id="comment" className="input" wrap="soft" />
          <button className="button" type="submit">
            Comment
          </button>
        </form>
      </div>
    );
  }
}

export default PostComment;
