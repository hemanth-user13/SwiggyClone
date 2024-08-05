import React from "react";
import "./MainContent.css";
import Resturants from "./Resturants";

function MainContent() {
  return (
    <div className="outer-container">
      <div className="container">
        <h2 className="text-left  text-2xl">
          <b>What's on your mind?</b>
        </h2>
        <Resturants />
      </div>
    </div>
  );
}

export default MainContent;
