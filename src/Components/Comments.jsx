import React, { Component } from "react";
import * as api from "../utils";
import Voting from "./Voting";
import deleteMe from "../images/trash-2-256.png";
import "../styles/comments.css";

class Comments extends Component {
  state = {
    comments: [],
    user: "tickle122",
    accessDenied: false
  };
  render() {
    return (
      <div>
        <h2>Comments</h2>
        {this.state.comments.map((comment, index) => {
          return (
            <div key={comment.comment_id}>
              <p>{comment.author}</p>
              <p>
                {comment.body}
                <img
                  src={deleteMe}
                  alt="delete"
                  height="30px"
                  width="30px"
                  onClick={() =>
                    this.deleteThisComment(
                      comment.comment_id,
                      index,
                      comment.author
                    )
                  }
                />
              </p>

              <Voting
                votes={comment.votes}
                id={comment.comment_id}
                section="comments"
              />
            </div>
          );
        })}
      </div>
    );
  }

  deleteThisComment = (id, index, author) => {
    if (author === this.state.user) {
      api.deleteComment(id);
      let newComments = this.state.comments;
      newComments.splice(index, 1);
      this.setState({ comments: newComments });
    } else this.setState({ accessDenied: true });
  };

  componentDidMount() {
    this.getComments(this.props.id);
  }

  getComments = id => {
    api.fetchComments(id).then(comments => this.setState({ comments }));
  };
}

export default Comments;
