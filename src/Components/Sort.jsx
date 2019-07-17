import React, { Component } from "react";

class Sort extends Component {
  render() {
    return (
      <div>
        <select>
          <option>Votes</option>
          <option>Date Created</option>
          <option>Comment Count</option>
        </select>
        <select>
          <option>Ascending</option>
          <option>Decending</option>
        </select>
      </div>
    );
  }
}

export default Sort;
