import React from "react";
import Gallery from "./gallery/Gallery";
import ControlPanel from "./controlPanel/ControlPanel";

interface Props {
  handleOpenPopUp: () => void;
}

function ProductSection(props: Props) {
  return (
    <div id="productSection" className="productSection">
      <div className="content">
        <Gallery />
        <ControlPanel handleOpenPopUp={props.handleOpenPopUp} />
      </div>
    </div>
  );
}

export default ProductSection;
