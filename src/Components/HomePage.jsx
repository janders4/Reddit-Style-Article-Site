import React, { Component } from "react";
import Navi from "../Components/Navi";
import Articles from "../Components/Articles";
import "../styles/bodyContainer.css";
import { Router } from "@reach/router";
import Sort from "./Sort";

class HomePage extends Component {
  state = {
    sortBy: "votes",
    direction: "desc"
  };
  render() {
    console.log(this.state, " <<<< State");
    const { sortBy, direction } = this.state;
    return (
      <div className="bodyContainer">
        <Sort getSort={this.setSortParams} getDir={this.setDirectionParams} />
        <Navi className="navi" setTopic={this.topicChange} />
        <Router primary={false}>
          <Articles
            className="articles"
            path="/"
            sortBy={sortBy}
            direction={direction}
          />
          <Articles
            className="articles"
            path="/topic/:topic"
            sortBy={sortBy}
            direction={direction}
          />
        </Router>
      </div>
    );
  }
  setSortParams = sort => {
    this.setState({ sortBy: sort });
  };
  setDirectionParams = dir => {
    this.setState({ direction: dir });
  };
}

export default HomePage;
