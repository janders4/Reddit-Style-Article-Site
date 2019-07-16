import React, { Component } from "react";

import "../styles/singleArticle.css";

import * as api from "../utils";

class SingleArticle extends Component {
  state = { article: {} };
  render() {
    const { article } = this.state;
    return (
      <div>
        <h2 className="links">{article.title}</h2>
        <p>{article.body}</p>
        <h3>comments</h3>
      </div>
    );
  }
  componentDidMount() {
    this.getArticleById(this.props.id);
  }
  getArticleById = id => {
    api.fetchArticleById(id).then(({ article }) => this.setState({ article }));
  };
}

export default SingleArticle;
