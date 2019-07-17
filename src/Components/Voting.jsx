import React, { Component } from "react";
import thumbsUp from "../images/thumbs-up-3-128.png";
import thumbsDown from "../images/thumbs-down-256.png";
import "../styles/voting.css";
import * as api from "../utils";

class Voting extends Component {
  render() {
    return (
      <div>
        <hr className="orange-line" />
        <div className="voting">
          <img
            src={thumbsUp}
            alt="vote-up"
            height="40px"
            width="40px"
            value={1}
            onClick={this.handleVote}
          />
          <h3>{this.props.votes}</h3>
          <img
            className="thumbsdown"
            src={thumbsDown}
            alt="vote-down"
            height="40px"
            width="40px"
            value={-1}
            onClick={this.handleVote}
          />
        </div>
        <hr className="orange-line" />
      </div>
    );
  }

  handleVote = event => {
    event.preventDefault();
    const vote = event;
    console.log(vote);
    const id = this.props.commentId;
    // console.log(vote, id, " <<<<<<");
    //api.postCommentVote(id, -1);
  };
}

export default Voting;
