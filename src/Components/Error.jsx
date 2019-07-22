import React, { Component } from "react";
import spock from "../images/spock.png";

class Error extends Component {
  render() {
    return (
      <div>
        <img src={spock} alt="error screen" height="200px" width="180px" />
        <h3>Opps... Something went wrong</h3>
      </div>
    );
  }
}

export default Error;
