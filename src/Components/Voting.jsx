import React, { Component } from "react";
import thumbsUp from "../images/thumbs-up-3-128.png";
import thumbsDown from "../images/thumbs-down-256.png";
import "../styles/voting.css";
import * as api from "../utils";

class Voting extends Component {
  state = {
    voteChange: 0
  };

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
            onClick={() => this.handleVote(1)}
          />
          <h3>{this.props.votes + this.state.voteChange || 0}</h3>
          <img
            className="thumbsdown"
            src={thumbsDown}
            alt="vote-down"
            height="40px"
            width="40px"
            onClick={() => this.handleVote(-1)}
          />
        </div>
        <hr className="orange-line" />
      </div>
    );
  }

  handleVote = vote => {
    const section = this.props.section;
    const id = this.props.id;
    api.postCommentVote(id, vote, section).then(updatedArticle => {});
    this.setState({ voteChange: this.state.voteChange + vote });
  };
}

export default Voting;
