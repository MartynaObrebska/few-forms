import React from "react";
import ControlPanel from "./controlPanel/ControlPanel";

function ProductSection() {
  const pictures = [
    "picture1",
    "picture2",
    "picture3",
    "picture4",
    "picture5",
    "picture6",
  ];
  return (
    <div className="productSection">
      <div className="content">
        <div className="gallery">
          <div className="picture">
            <div className="arrow left" />
            <div className="arrow right" />
          </div>
          <div className="pictureList">
            <ul>
              {pictures.map((picture, index) => (
                <li key={index}>
                  <div className={`listPicture ${picture}`} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ControlPanel />
      </div>
    </div>
  );
}

export default ProductSection;
