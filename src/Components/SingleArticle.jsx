import React, { Component } from "react";
import "../styles/singleArticle.css";
import Comments from "../Components/Comments";
import * as api from "../utils";
import Voting from "./Voting";
import PostComment from "./PostComment";
import moment from "moment";
import "../styles/articleBody.css";
import Collapsible from "react-collapsible";
import Loading from "./Loading";

class SingleArticle extends Component {
  state = { article: {}, comments: [], isLoading: true };
  render() {
    const { article } = this.state;
    const articleId = this.props.article_id;
    return (
      <div className="articleContainer">
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <div>
            <h2 className="links">{article.title}</h2>
            <div className="article">
              <h4>{`Written by ${article.author} ${moment(
                article.created_at
              ).from()}`}</h4>
              <p>{article.body}</p>
              <Voting id={articleId} votes={article.votes} section="articles" />
              <Collapsible
                trigger={
                  <p className="collapse">{`Comments 💬 ${
                    article.comment_count
                  }`}</p>
                }
                easing="linear"
              >
                <PostComment
                  id={articleId}
                  pushNewComment={this.pushNewComment}
                />
                <Comments id={articleId} comments={this.state.comments} />
              </Collapsible>
            </div>
          </div>
        )}
      </div>
    );
  }
  componentDidMount() {
    this.getArticleById(this.props.article_id);

    this.getComments(this.props.article_id);
  }

  getArticleById = id => {
    api
      .fetchArticleById(id)
      .then(({ article }) => this.setState({ article, isLoading: false }));
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
