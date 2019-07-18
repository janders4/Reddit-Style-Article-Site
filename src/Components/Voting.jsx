import React, { Component } from "react";
import thumbsUp from "../images/thumbs-up-3-128.png";
import thumbsDown from "../images/thumbs-down-256.png";
import "../styles/voting.css";
import * as api from "../utils";

class Voting extends Component {
  state = {
    voteChange: 0,
    voted: false
  };

  render() {
    return (
      <div>
        <div className="voting">
          <img
            className="thumbsUp"
            src={thumbsUp}
            alt="vote-up"
            height="30px"
            width="30px"
            onClick={() => this.handleVote(1)}
          />
          <h3>{this.props.votes + this.state.voteChange || 0}</h3>
          <img
            className="thumbsdown"
            src={thumbsDown}
            alt="vote-down"
            height="30px"
            width="30px"
            onClick={() => this.handleVote(-1)}
          />
        </div>
        <hr className="orange-line" />
      </div>
    );
  }

  handleVote = vote => {
    if (!this.state.voted) {
      this.setState({ voteChange: this.state.voteChange + vote, voted: true });
      const section = this.props.section;
      const id = this.props.id;
      api.postCommentVote(id, vote, section).then(updatedArticle => {});
    }
  };
}

export default Voting;
