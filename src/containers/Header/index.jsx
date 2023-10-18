import React, { useState, useEffect, useRef } from "react";
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
  let menuRef = useRef();

  const handleClick = () => {
    setClick(!click);
  };

  useEffect(() => {
    const closeMenu = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setClick(false);
      }
    };

    if (click) {
      document.addEventListener("mousedown", closeMenu);
    } else {
      document.removeEventListener("mousedown", closeMenu);
    }

    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, [click]);

  return (
    <>
      <nav className="container wrapper">
        <Link to="/" className="left">
          <img src={imageScissors} alt="Scissors" />
          <div className="left-icon-second">
            <img src={imageLogo} alt="Logo" />
          </div>
        </Link>

        <div className="right" ref={menuRef}>
          <ul className="nav-menu">
            {NavLinkInfo.map((item) => {
              const { id, title, path } = item;
              return (
                <li key={id} className="nav-item">
                  <Link to="/" className="nav-links">
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
        <div className="right-menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </nav>

      {click && (
        <div className="container" ref={menuRef}>
          <ul className="mobile-nav-menu">
            {NavLinkInfo.map((item) => {
              const { id, title, path } = item;
              return (
                <li key={id} className="mobile-nav-menu-items">
                  <Link to="/" className="nav-links">
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mobile-nav-menu-right">
            <a href="#">
              <img src={imageProfile} alt="Profile" />
            </a>
            <a>
              <img src={imageNotification} alt="Notification" />
            </a>
            <Button>Appointment</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
