import React, { Component } from "react";
import "../styles/articles.css";
import "../styles/min-article.css";
import MinArticle from "../Components/MinArticle";
import * as api from "../utils";

class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;
    console.log(this.state.articles);
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

  getArticles = () => {
    api.fetchArticles().then(data => {
      this.setState({ articles: data });
    });
  };
}

export default Articles;
