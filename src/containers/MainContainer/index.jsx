import React from "react";
import History from "./History";
import style from "./style.css";
import GetStarted from "../GetStarted";

function TopLeftCorner() {
  return <div className="top-left-corner">top-left</div>;
}

function TopRightCorner() {
  return <div className="top-right-corner">top-right</div>;
}

function BottomLeftCorner() {
  return (
    <div className="bottom-left-corner">
      bottom-leftfjkdsbfjdsfgdssdgdsgsdgsdgdsgdsjgnsdjgbdsjkbgjksdbvjksdbjkvbsdjkbvdsjkbvjksdbv
      vdsvds vdsvdsvsd vdsvdsvsdv GetStartedv GetStartedvsd v sd vdsvdsvsdv
      GetStartedvsdsd
    </div>
  );
}

function BottomRightCorner() {
  return <div className="bottom-right-corner">bottom-right</div>;
}

const MainContainer = () => {
  return (
    <div className="main-container-wrapper">
      {/* <TopLeftCorner />
      <TopRightCorner />
      <BottomLeftCorner />
      <BottomRightCorner /> */}
      <History />
    </div>
  );
};

export default MainContainer;
