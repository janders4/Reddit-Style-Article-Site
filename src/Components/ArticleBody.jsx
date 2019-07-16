import React, { Component } from "react";
import SingleArticle from "../Components/SingleArticle";
import HomeLink from "../Components/HomeLink";
import "../styles/articleBody.css";

class ArticleBody extends Component {
  render() {
    return (
      <div className="articleContainer">
        <HomeLink />
        <SingleArticle article_id={this.props.id} />
      </div>
    );
  }
}

export default ArticleBody;
