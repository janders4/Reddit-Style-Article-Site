import React, { Component } from "react";
import "../styles/min-article.css";

class MinArticle extends Component {
  render() {
    const { article } = this.props;
    return (
      <div className="minArticle-container">
        <h3 className="title">{article.title}</h3>
        <p className="article">{article.body}</p>
        <h4 className="author">{`By: ${article.author}`}</h4>
        <h4 className="comments">{`Comments: ${article.comment_count}`}</h4>
        <h4 className="likes">{`Likes: ${article.votes}`}</h4>
      </div>
    );
  }
}

export default MinArticle;
