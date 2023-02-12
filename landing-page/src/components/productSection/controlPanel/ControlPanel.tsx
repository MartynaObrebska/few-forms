import React from "react";
import JoinBtn from "../../joinBtn/JoinBtn";

interface Props {
  handleOpenPopUp: () => void;
}

function ControlPanel(props: Props) {
  const labels = [
    "Sizes",
    "Colors",
    "Storage features",
    "Materials",
    "Delivery & Assembly",
  ];
  return (
    <div className="controlPanel">
      <div className="title">Sideboards</div>
      <div className="productInfo">
        <p className="title">Product info:</p>
        {labels.map((label) => (
          <div className="label">
            <div className="plus" />
            <p>{label}</p>
          </div>
        ))}
      </div>
      <div className="bottomSection">
        <div className="priceContainer">
          <p className="price">
            <span>000</span>€
          </p>
          <p className="desc">Estimated price</p>
        </div>
        <JoinBtn handleClick={props.handleOpenPopUp} />
      </div>
      <div className="note">
        <div className="icon"></div>
        <p>
          <span>Note:</span> Security: The ability for the website to protect
          against hacking and other security threats, ensuring that user data.
        </p>
      </div>
    </div>
  );
}

export default ControlPanel;
