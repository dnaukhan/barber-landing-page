import React from "react";
import style from "./style.css";
const History = () => {
  return (
    <div className="history-wrapper">
      <div className="history-left">
        <img
          src={require("../../../assets/images/History.png")}
          alt="History image"
          className="history-left-img"
        />
      </div>
      <div className="history-right">
        <h1 className="history-title">
          <span className="history-title-highlighted">Our</span> History
        </h1>
        <p className="history-text">
          It is a long established fact that a reader will be distracted by the
          readable content of a page w hen looking at.
        </p>
        <p className="history-text">
          It is a long established fact that a reader will be distracted by the
          readable content of a page w hen looking at.
        </p>
        <a href="#" className="history-button">
          <span>Learn More</span>
        </a>
      </div>
    </div>
  );
};

export default History;
