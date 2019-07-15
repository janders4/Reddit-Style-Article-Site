import React from "react";
import Header from "./Components/Header";
import "./styles/app.css";
import Nav from "./Components/Nav";
import Articles from "./Components/Articles";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
