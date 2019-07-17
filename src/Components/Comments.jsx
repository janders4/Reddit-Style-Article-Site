import React, { Component } from "react";
import * as api from "../utils";
import Voting from "./Voting";

class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    return (
      <div>
        <h2>Comments</h2>
        {this.state.comments.map(comment => {
          return (
            <div key={comment.comment_id}>
              <p>{comment.body}</p>
              <Voting votes={comment.votes} commentId={comment.comment_id} />
            </div>
          );
        })}
      </div>
    );
  }
  componentDidMount() {
    this.getComments(this.props.id);
  }

  getComments = id => {
    api.fetchComments(id).then(comments => this.setState({ comments }));
  };
}

export default Comments;
