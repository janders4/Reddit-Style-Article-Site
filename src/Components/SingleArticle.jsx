import React, { Component } from "react";
import "../styles/singleArticle.css";
import Comments from "../Components/Comments";
import * as api from "../utils";
import Voting from "./Voting";

class SingleArticle extends Component {
  state = { article: {} };
  render() {
    const { article } = this.state;
    console.log(article);
    return (
      <div className="article">
        <h2 className="links">{article.title}</h2>
        <p>{article.body}</p>
        <Voting votes={article.votes} />
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
