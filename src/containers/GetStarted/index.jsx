import React from "react";
import style from "./style.css";

const GetStarted = () => {
  return (
    <div className="container get-started-wrapper">
      <div className="get-started-left">
        <h1 className="get-started-title">
          <span className="get-started-title-highlited">Hairstyle</span>{" "}
          Reflects The Personality Inside You
        </h1>
        <p className="get-started-text">
          It is a long established fact that a reader will be distracted by the
          readable content of a page w hen looking at.
        </p>
        <a href="#" className="get-started-button">
          <span className="get-started-button-text">Get Started</span>
        </a>
      </div>
      <div className="get-started-right">
        <img
          src={require("../../assets/images/GetStarted.png")}
          alt="Get Started image"
        ></img>
      </div>
    </div>
  );
};

export default GetStarted;
