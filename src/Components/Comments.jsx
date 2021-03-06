import React, { Component } from "react";
import * as api from "../utils";
import Voting from "./Voting";
import deleteMe from "../images/trash-2-512.png";
import "../styles/comments.css";
import "../../node_modules/animate.css/animate.min.css";

class Comments extends Component {
  state = {
    comments: [],
    user: "tickle122",
    accessDenied: false,
    deleted: false,
    deletedId: null
  };
  render() {
    const { comments, user, deleted, deletedId } = this.state;
    return (
      <div>
        {comments.map((comment, index) => {
          return (
            <div
              key={comment.comment_id}
              className={
                deleted && deletedId === comment.comment_id
                  ? "animated slideOutLeft"
                  : null
              }
            >
              <span className="commentTitle">
                <p className="commentAuthor">Comment by: {comment.author} </p>
                {user === comment.author && (
                  <img
                    src={deleteMe}
                    alt="delete"
                    height="20px"
                    width="20px"
                    onClick={() =>
                      this.deleteThisComment(
                        comment.comment_id,
                        index,
                        comment.author
                      )
                    }
                  />
                )}
              </span>

              <p>{comment.body}</p>

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
      this.setState({ deleted: true, deletedId: id });
      api.deleteComment(id);
      setTimeout(() => {
        let newComments = this.state.comments;
        newComments.splice(index, 1);
        this.setState({ comments: newComments, deleted: false });
      }, 600);
    } else this.setState({ accessDenied: true });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.comments !== this.props.comments) {
      this.setState({ comments: this.props.comments });
    }
  }
}

export default Comments;
