import React, { Component } from "react";
import Navi from "../Components/Navi";
import Articles from "../Components/Articles";
import "../styles/bodyContainer.css";
import "../styles/sort.css";
import { Router } from "@reach/router";
import Sort from "./Sort";

class HomePage extends Component {
  state = {
    sortBy: "votes",
    direction: "desc",
    isLoading: true
  };
  render() {
    const { sortBy, direction } = this.state;
    return (
      <div>
        <Sort
          className="sort"
          getSort={this.setSortParams}
          getDir={this.setDirectionParams}
        />
        <Navi className="navi" />

        <div className="bodyContainer">
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
