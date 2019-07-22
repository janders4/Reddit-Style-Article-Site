import React from "react";
import Header from "./Components/Header";
import "./styles/app.css";
import Footer from "./Components/Footer";
import { Router } from "@reach/router";
import ArticleBody from "./Components/ArticleBody";
import HomePage from "./Components/HomePage";
import "../node_modules/animate.css/animate.min.css";
import Error from "./Components/Error";

const App = () => {
  return (
    <div className="App">
      <Header className="header" />
      <Router className="routerBox">
        <HomePage path="/*" />
        <ArticleBody path="/article/:id" />
        <Error path="/error" />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
