import React, { Component } from "react";
import Header from "./Components/Header";
import "./styles/app.css";
import Footer from "./Components/Footer";
import { Router } from "@reach/router";
import SingleArticle from "./Components/SingleArticle";
import HomePage from "./Components/HomePage";

class App extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Header />
        <Router className="routerBox">
          <HomePage path="/" />
          <SingleArticle path="/article/:id" />
        </Router>
        <Footer />
      </div>
    );
  }
  componentDidMount = () => {};
}

export default App;
