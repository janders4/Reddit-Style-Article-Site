import React from "react";
import { Link } from "@reach/router";

function HomeLink(props) {
  return (
    <div>
      <Link to="/">
        <h2>Home</h2>
      </Link>
    </div>
  );
}
export default HomeLink;
