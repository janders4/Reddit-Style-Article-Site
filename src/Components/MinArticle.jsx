import React, { Component } from "react";
import "../styles/min-article.css";
import { Link } from "@reach/router";
import moment from "moment";

class MinArticle extends Component {
  render() {
    const { article } = this.props;
    return (
      <div className="minArticle-container">
        <hr className="line" />
        <Link to={`/article/${article.article_id}`} className="title">
          <h3>{article.title}</h3>
        </Link>
        <h4 className="author">{`Posted by: ${article.author} ${moment(
          article.created_at
        ).from()}`}</h4>
        <h4 className="comments">{`Comments: ${article.comment_count}`}</h4>
        <h4 className="likes">{`Likes: ${article.votes}`}</h4>
      </div>
    );
  }
}

export default MinArticle;
