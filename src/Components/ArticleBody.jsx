import React, { Component } from "react";
import SingleArticle from "../Components/SingleArticle";

class ArticleBody extends Component {
  render() {
    return <SingleArticle article_id={this.props.id} />;
  }
}

export default ArticleBody;
