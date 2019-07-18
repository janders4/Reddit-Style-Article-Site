import React, { Component } from "react";

class Sort extends Component {
  render() {
    return (
      <div>
        <label className="sortLabel">Sort-by:</label>
        <select onChange={this.handleSortByChange}>
          <option value="votes">Votes</option>
          <option value="created_at">Date Created</option>
          <option value="comment_count">Comment Count</option>
        </select>
        <label className="sortLabel">Direction:</label>
        <select onChange={this.handleDirectionChange}>
          <option value="desc">Decending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>
    );
  }
  handleSortByChange = event => {
    this.props.getSort(event.target.value);
  };

  handleDirectionChange = event => {
    this.props.getDir(event.target.value);
  };
}

export default Sort;
