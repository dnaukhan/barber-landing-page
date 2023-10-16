import React from "react";
import style from "./style.css";
import imageLogo from "../../assets/icons/Logo.svg";
import imageScissors from "../../assets/icons/Scissors.svg";
import imageFacebook from "../../assets/icons/Facebook.svg";
import imageTwitter from "../../assets/icons/Twitter.svg";
import imageGoogle from "../../assets/icons/Google.svg";

const SocialNetworks = [
  {
    id: 0,
    icon: imageFacebook,
    title: "Facebook",
    path: "https://www.facebook.com/",
  },
  {
    id: 1,
    icon: imageTwitter,
    title: "Twitter",
    path: "https://twitter.com/",
  },
  {
    id: 2,
    icon: imageGoogle,
    title: "Google",
    path: "https://www.google.kz/?hl=ru",
  },
];

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <a href="#">
        <img src={imageScissors} alt="Scissors" />
        <img src={imageLogo} alt="Logo" className="footer-logo-second" />
      </a>
      <p className="footer-text">
        It is a long established fact that a reader will be distracted by the
        readable
      </p>
      <div className="footer-icons-wrapper">
        {SocialNetworks.map((item) => {
          const { id, icon, title, path } = item;
          return (
            <a href={path} key={id} className="footer-icon-wrapper">
              <img src={icon} alt={`${title} icon`} />
            </a>
          );
        })}
      </div>
      <div className="footer-line"></div>
    </div>
  );
};

export default Footer;
