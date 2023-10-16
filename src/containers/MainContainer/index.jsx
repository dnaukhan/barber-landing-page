import React from "react";
import History from "./History";
import style from "./style.css";

import Services from "./Services";
import Gallery from "./Gallery";

function TopLeftCorner() {
  return <div className="top-left-corner"></div>;
}

function TopRightCorner() {
  return <div className="top-right-corner"></div>;
}

function BottomLeftCorner() {
  return <div className="bottom-left-corner"></div>;
}

function BottomRightCorner() {
  return <div className="bottom-right-corner"></div>;
}

const MainContainer = () => {
  return (
    <div className="main-container-wrapper">
      {/* <TopLeftCorner /> */}
      {/* <TopRightCorner />
      <BottomLeftCorner />
      <BottomRightCorner /> */}
      <History />
      <Services />
      <Gallery />
    </div>
  );
};

export default MainContainer;
