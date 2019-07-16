import React, { Component } from "react";
import "../styles/singleArticle.css";
import Comments from "../Components/Comments";
import * as api from "../utils";
import thumbsUp from "../images/thumbs-up-3-128.png";
import thumbsDown from "../images/thumbs-down-256.png";

class SingleArticle extends Component {
  state = { article: {} };
  render() {
    const { article } = this.state;
    return (
      <div className="article">
        <h2 className="links">{article.title}</h2>
        <p>{article.body}</p>
        <span className="voting">
          <img src={thumbsUp} alt="vote-up" height="40px" width="40px" />
          <h3>vote count</h3>
          <img src={thumbsDown} alt="vote-down" height="40px" width="40px" />
        </span>
        <Comments id={this.props.article_id} />
      </div>
    );
  }
  componentDidMount() {
    this.getArticleById(this.props.article_id);
  }
  getArticleById = id => {
    api.fetchArticleById(id).then(({ article }) => this.setState({ article }));
  };
}

export default SingleArticle;
