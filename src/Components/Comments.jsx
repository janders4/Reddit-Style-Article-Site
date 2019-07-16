import React, { Component } from "react";
import * as api from "../utils";

class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    return (
      <div>
        <h3>Comments</h3>
        {this.state.comments.map(comment => {
          return (
            <div key={comment.comment_id}>
              <p>{comment.body}</p>
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
