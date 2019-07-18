import React from "react";
import "../styles/header.css";
import "../../node_modules/animate.css/animate.min.css";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="headerBox animated fadeIn delay-0.75s">
          <h1 className="">CheckIt</h1>
        </div>
      </Link>
    </div>
  );
};

export default Header;
