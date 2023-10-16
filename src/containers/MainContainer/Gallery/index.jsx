import React from "react";
import style from "./style.css";

import Gallery1 from "../../../assets/images/Gallery1.png";
import Gallery2 from "../../../assets/images/Gallery2.png";
import Gallery3 from "../../../assets/images/Gallery3.png";
import Gallery4 from "../../../assets/images/Gallery4.png";
import Gallery5 from "../../../assets/images/Gallery5.png";
import Gallery6 from "../../../assets/images/Gallery6.png";

const GalleryPhoto = [
  {
    id: 0,
    image: Gallery1,
    path: "#",
  },
  {
    id: 1,
    image: Gallery2,
    path: "#",
  },
  {
    id: 2,
    image: Gallery3,
    path: "#",
  },
  {
    id: 3,
    image: Gallery4,
    path: "#",
  },
  {
    id: 4,
    image: Gallery5,
    path: "#",
  },
  {
    id: 5,
    image: Gallery6,
    path: "#",
  },
];

const Gallery = () => {
  return (
    <div className="gallery-wrapper">
      <h1 className="gallery-title">
        Our <span className="gallery-title-highlighted">Gallery</span>
      </h1>

      <div className="gallery-photos">
        {GalleryPhoto.map((photo) => {
          const { id, image, path } = photo;
          return (
            <a href={path} key={id} className="gallery-photo">
              <img src={image} alt={`image ${id}`} />
            </a>
          );
        })}
      </div>
      <a href="#" className="gallery-button">
        <span>View All</span>
      </a>
    </div>
  );
};

export default Gallery;
