import React, { useState } from "react";
import "./style.css";
import imageLogo from "../../assets/icons/Logo.svg";
import imageScissors from "../../assets/icons/Scissors.svg";
import imageProfile from "../../assets/icons/Profile.svg";
import imageNotification from "../../assets/icons/Notification.svg";

import DropdownMenu from "../../components/DropdownMenu";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

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
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  return (
    <nav className="container wrapper">
      <Link to="/" className="left">
        <img src={imageScissors} alt="Scissors" />
        <div className="left-icon-second">
          <img src={imageLogo} alt="Logo" />
        </div>
      </Link>

      <div className="right-menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <div className="right">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {NavLinkInfo.map((item) => {
            const { id, title, path } = item;
            return (
              <li key={id} className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="right-icons">
          <a href="#">
            <img src={imageProfile} alt="Profile" />
          </a>
          <a>
            <img src={imageNotification} alt="Notification" />
          </a>
          <Button>Appointment</Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
