import React from "react";
import style from "./style.css";
import ScissorsIcon from "../../../assets/icons/ScissorsIcon.svg";
import ElectricRazorIcon from "../../../assets/icons/ElectricRazorIcon.svg";
import CleanserIcon from "../../../assets/icons/CleanserIcon.svg";

const ServicesInfo = [
  {
    id: 0,
    icon: ScissorsIcon,
    title: "Hair Cut",
    description:
      "long established fact that a reacted by the readable content of hen looking at.",
    path: "#",
  },
  {
    id: 1,
    icon: ElectricRazorIcon,
    title: "Beard Cut",
    description:
      "long established fact that a reacted by the readable content of hen looking at.",
    path: "#",
  },
  {
    id: 2,
    icon: CleanserIcon,
    title: "Facial Pack",
    description:
      "long established fact that a reacted by the readable content of hen looking at.",
    path: "#",
  },
];

const Services = () => {
  return (
    <div className="services-wrapper">
      <h1 className="services-title">
        Services We <span className="services-title-highlighted">Provide</span>
      </h1>
      <div className="services-card-list">
        {ServicesInfo.map((card) => {
          const { id, icon, title, description, path } = card;
          return (
            <div key={id} className="services-card">
              <img
                src={icon}
                alt={`${title} icon`}
                className="services-card-icon"
              />
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
