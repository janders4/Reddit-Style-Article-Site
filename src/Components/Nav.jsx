import React, { Component } from "react";
import "../styles/nav.css";
import * as api from "../utils";

class Nav extends Component {
  state = {
    topics: []
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <div className="nav">
          {this.state.topics.map(topic => {
            return <h2>{topic.slug}</h2>;
          })}
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchIds();
  };

  fetchIds = async () => {
    api.getIds().then(({ topics }) => {
      this.setState({ topics });
    });
  };
}

export default Nav;
