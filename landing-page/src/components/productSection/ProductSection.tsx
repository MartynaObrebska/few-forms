import React from "react";
import Gallery from "./gallery/Gallery";
import ControlPanel from "./controlPanel/ControlPanel";
import "./productSection.css";

interface Props {
  productSectionRef: React.MutableRefObject<HTMLDivElement | null>;
  handleOpenPopUp: () => void;
}

function ProductSection(props: Props) {
  return (
    <div
      ref={props.productSectionRef}
      id="productSection"
      className="productSection"
    >
      <div className="content">
        <Gallery />
        <ControlPanel handleOpenPopUp={props.handleOpenPopUp} />
      </div>
    </div>
  );
}

export default ProductSection;
