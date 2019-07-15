import React, { Component } from "react";
import "../styles/nav.css";

class Nav extends Component {
  render() {
    const state = {
      topics: [
        {
          slug: "coding",
          description: "Code is love, code is life"
        },
        {
          slug: "stuff",
          description: "Code is love, code is life"
        }
      ]
    };
    return (
      <div className="nav">
        {state.topics.map(topic => {
          return <h2>{topic.slug}</h2>;
        })}
      </div>
    );
  }
  componentDidMount() {}
}

export default Nav;
