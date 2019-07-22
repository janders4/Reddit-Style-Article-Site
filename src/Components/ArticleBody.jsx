import React from "react";
import SingleArticle from "../Components/SingleArticle";

const ArticleBody = props => {
  return <SingleArticle article_id={props.id} />;
};

export default ArticleBody;
