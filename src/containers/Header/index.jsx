import React from "react";
import style from "./style.css";
import imageLogo from "../../assets/icons/Logo.svg";
import imageScissors from "../../assets/icons/Scissors.svg";
import imageProfile from "../../assets/icons/Profile.svg";
import imageNotification from "../../assets/icons/Notification.svg";

const NavLinkInfo = [
  {
    id: 0,
    title: "Home",
    path: "#",
  },
  {
    id: 1,
    title: "History",
    path: "#",
  },
  {
    id: 2,
    title: "Service",
    path: "#",
  },
  {
    id: 3,
    title: "Gallery",
    path: "#",
  },
];

const Header = () => {
  return (
    <div className="wrapper">
      <div className="left">
        <div className="icon">
          <img src={imageScissors} alt="Scissors" />
          <img src={imageLogo} alt="Logo" />
        </div>
        <div className="nav-link">
          {NavLinkInfo.map((item) => {
            const { id, title, path } = item;
            return (
              <a href={path} key={id} className="nav-link-item">
                <span className="nav-link-item-text">{title}</span>
              </a>
            );
          })}
        </div>
      </div>
      <div className="right">
        <img src={imageProfile} alt="Profile" className="right-icon" />
        <img
          src={imageNotification}
          alt="Notification"
          className="right-icon"
        />
        <a href="#" className="appointment">
          <span>Appointment</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
