import React, { Component } from "react";
import "../styles/singleArticle.css";
import Comments from "../Components/Comments";
import * as api from "../utils";
import Voting from "./Voting";
import PostComment from "./PostComment";

class SingleArticle extends Component {
  state = { article: {}, comments: [] };
  render() {
    const { article } = this.state;
    const articleId = this.props.article_id;
    return (
      <div className="article">
        <h2 className="links">{article.title}</h2>
        <p>{article.body}</p>
        <Voting id={articleId} votes={article.votes} section="articles" />
        <PostComment id={articleId} pushNewComment={this.pushNewComment} />
        <Comments id={articleId} comments={this.state.comments} />
      </div>
    );
  }
  componentDidMount() {
    this.getArticleById(this.props.article_id);
    this.getComments(this.props.article_id);
  }

  getArticleById = id => {
    api.fetchArticleById(id).then(({ article }) => this.setState({ article }));
  };

  getComments = id => {
    api
      .fetchComments(id)
      .then(comments => this.setState({ comments: comments }));
  };
  pushNewComment = comment => {
    this.setState({ comments: [comment, ...this.state.comments] });
  };
}

export default SingleArticle;
