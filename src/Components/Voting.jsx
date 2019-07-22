import React, { Component } from "react";
import thumbsUp from "../images/thumbs-up-3-512.png";
import thumbsDown from "../images/thumbs-down-512.png";
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
    const { voted, voteChange } = this.state;
    const section = this.props.section;
    const id = this.props.id;
    if (!voted) {
      this.setState({ voteChange: voteChange + vote, voted: true });
      api.postCommentVote(id, vote, section);
    } else {
      this.setState({ voteChange: 0, voted: false });
      api.postCommentVote(id, vote, section);
    }
  };
}

export default Voting;
