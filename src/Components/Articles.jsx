import React, { Component } from "react";
import { navigate } from "@reach/router";
import "../styles/articles.css";
import "../styles/min-article.css";
import MinArticle from "../Components/MinArticle";
import * as api from "../utils";
import Loading from "./Loading";

class Articles extends Component {
  state = {
    articles: [],
    topic: "",
    isLoading: true,
    sortChange: false
  };
  render() {
    const { articles, isLoading } = this.state;
    return (
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="articles">
            {articles.map(article => {
              return <MinArticle article={article} key={article.article_id} />;
            })}
          </div>
        )}
      </div>
    );
  }
  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      this.getArticles();
    }
  }

  getArticles = () => {
    try {
      const { topic, sortBy, direction } = this.props;
      api.fetchArticles(topic, sortBy, direction).then(data => {
        this.setState({ articles: data, isLoading: false });
      });
    } catch (error) {
      navigate("/error");
    }
  };
}

export default Articles;
