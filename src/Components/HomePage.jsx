import React, { Component } from "react";
import Navi from "../Components/Navi";
import Articles from "../Components/Articles";
import "../styles/bodyContainer.css";
import { Router } from "@reach/router";

class HomePage extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <div className="bodyContainer">
        <Navi className="navi" setTopic={this.topicChange} />
        <Router primary={false}>
          <Articles className="articles" path="/" />
          <Articles className="articles" path="/topic/:topic" />
        </Router>
      </div>
    );
  }
}

export default HomePage;
