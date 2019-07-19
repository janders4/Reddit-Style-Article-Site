import React, { Component } from "react";
import "../styles/loading.css";

class Loading extends Component {
  state = { loading: true };
  render() {
    return (
      <div>
        <div className="lds-roller">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}

export default Loading;
