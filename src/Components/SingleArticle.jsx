import React, { Component } from "react";
import "../styles/singleArticle.css";
import Comments from "../Components/Comments";
import * as api from "../utils";
import Voting from "./Voting";
import PostComment from "./PostComment";
import moment from "moment";
import "../styles/articleBody.css";

class SingleArticle extends Component {
  state = { article: {}, comments: [] };
  render() {
    const { article } = this.state;
    const articleId = this.props.article_id;
    return (
      <div className="articleContainer">
        <h2 className="links">{article.title}</h2>
        <div className="article">
          <h3>{`Written by ${article.author} ${moment(
            article.created_at
          ).from()}`}</h3>
          <Voting id={articleId} votes={article.votes} section="articles" />
          <p>{article.body}</p>
          <PostComment id={articleId} pushNewComment={this.pushNewComment} />
          <Comments id={articleId} comments={this.state.comments} />
        </div>
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
