import React from "react";
import ControlPanel from "./controlPanel/ControlPanel";

interface Props {
  handleOpenPopUp: () => void;
}

function ProductSection(props: Props) {
  const pictures = [
    "picture1",
    "picture2",
    "picture3",
    "picture4",
    "picture5",
    "picture6",
  ];
  return (
    <div id="productSection" className="productSection">
      <div className="content">
        <div className="gallery">
          <div className="picture">
            <div className="arrow left" />
            <div className="arrow right" />
          </div>
          <div className="pictureList">
            <ul>
              {pictures.map((picture, index) => (
                <li key={index} className={`listPicture ${picture}`} />
              ))}
            </ul>
          </div>
        </div>
        <ControlPanel handleOpenPopUp={props.handleOpenPopUp} />
      </div>
    </div>
  );
}

export default ProductSection;
