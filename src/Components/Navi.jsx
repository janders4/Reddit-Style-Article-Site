import React, { Component } from "react";
import { Link } from "@reach/router";
import "../styles/nav.css";
import * as api from "../utils";

class Navi extends Component {
  state = {
    topics: []
  };
  render() {
    return (
      <div className="nav">
        {this.state.topics.length > 1 &&
          this.state.topics.map(topic => {
            return (
              <Link to="/" key={topic.slug} className="links">
                {topic.slug}
              </Link>
            );
          })}
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchTopics();
  };

  fetchTopics = async () => {
    api.getTopics().then(({ topics }) => {
      this.setState({ topics: [{ slug: "All" }, ...topics] });
    });
  };
}

export default Navi;
