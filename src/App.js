import React, { Component } from "react";
import Header from "./Components/Header";
import "./styles/app.css";
import Footer from "./Components/Footer";
import { Router } from "@reach/router";
import ArticleBody from "./Components/ArticleBody";
import HomePage from "./Components/HomePage";
import "../node_modules/animate.css/animate.min.css";
import Loading from "./Components/Loading";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Header className="header" />
        {/* <Loading className="loading" /> */}
        <Router className="routerBox animated fadeIn delay-2s">
          <HomePage path="/*" />
          <ArticleBody path="/article/:id" />
        </Router>
        <Footer />
      </div>
    );
  }
  componentDidMount = () => {};
}

export default App;
