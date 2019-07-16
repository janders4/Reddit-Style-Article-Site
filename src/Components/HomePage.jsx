import React from "react";
import Navi from "../Components/Navi";
import Articles from "../Components/Articles";
import "../styles/bodyContainer.css";
const HomePage = () => {
  return (
    <div className="bodyContainer">
      <Navi className="navi" />
      <Articles className="articles" />
    </div>
  );
};

export default HomePage;
