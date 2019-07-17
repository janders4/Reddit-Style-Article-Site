import React, { Component } from "react";
import "../styles/articles.css";
import "../styles/min-article.css";
import MinArticle from "../Components/MinArticle";
import * as api from "../utils";

class Articles extends Component {
  state = {
    articles: [],
    topic: ""
  };
  render() {
    const { articles } = this.state;
    return (
      <div className="articles">
        {articles.map(article => {
          return <MinArticle article={article} key={article.article_id} />;
        })}
      </div>
    );
  }
  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.topic !== prevProps.topic) {
      this.getArticles();
    }
  }

  getArticles = () => {
    const { topic, sortBy, direction } = this.props;
    api.fetchArticles(topic, sortBy, direction).then(data => {
      this.setState({ articles: data });
    });
  };
}

export default Articles;
