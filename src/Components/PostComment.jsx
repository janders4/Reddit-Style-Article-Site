import React, { Component } from "react";
import "../styles/postComment.css";
import * as api from "../utils";

class PostComment extends Component {
  state = {
    comment: "",
    author: "tickle122"
  };

  render() {
    return (
      <div className="postCommentForm">
        <form onSubmit={this.postNewComment}>
          <label className="commentLabel" htmlFor="comment">
            Add Comment:
          </label>
          <textarea
            id="comment"
            className="input"
            wrap="soft"
            onChange={this.handleCommentChange}
            value={this.state.value}
          />
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
  handleCommentChange = event => {
    const { value } = event.target;
    this.setState({ comment: value });
  };

  postNewComment = event => {
    event.preventDefault();
    const { comment, author } = this.state;
    const articleId = this.props.id;
    api
      .postComment(articleId, comment, author)
      .then(({ comment }) => this.props.pushNewComment(comment));
  };
}

export default PostComment;
