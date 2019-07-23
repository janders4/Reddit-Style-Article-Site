import React, { Component } from "react";
import thumbsUp from "../images/thumbs-up-3-512.png";
import thumbsDown from "../images/thumbs-down-512.png";
import "../styles/voting.css";
import * as api from "../utils";

class Voting extends Component {
  state = {
    votes: this.props.votes,
    currentVotes: 0
  };

  render() {
    const { votes, currentVotes } = this.state;
    return (
      <div>
        <div className="voting">
          <img
            className="thumbsUp"
            src={thumbsUp}
            alt="vote-up"
            height="30px"
            width="30px"
            onClick={currentVotes < 1 ? () => this.handleVote(1) : null}
          />
          <h3>{votes || 0}</h3>
          <img
            className="thumbsdown"
            src={thumbsDown}
            alt="vote-down"
            height="30px"
            width="30px"
            onClick={currentVotes > -1 ? () => this.handleVote(-1) : null}
          />
        </div>
        <hr className="orange-line" />
      </div>
    );
  }

  handleVote = vote => {
    const { votes, currentVotes } = this.state;
    const { section, id } = this.props;
    const baseVotes = this.props.votes;
    this.setState({
      votes: votes + vote,
      currentVotes: currentVotes + vote
    });
    if (votes <= baseVotes + 1 && votes >= baseVotes - 1) {
      api.postCommentVote(id, vote, section);
    }
  };
}

export default Voting;
