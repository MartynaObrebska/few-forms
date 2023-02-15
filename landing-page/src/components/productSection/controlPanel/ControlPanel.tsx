import JoinBtn from "../../joinBtn/JoinBtn";
import Accordion from "./accordion/Accordion";

interface Props {
  handleOpenPopUp: () => void;
}

function ControlPanel(props: Props) {
  return (
    <div className="controlPanel">
      <div className="productTitle">Sideboards</div>
      <div className="productInfo">
        <p className="title">Product info:</p>
        <Accordion />
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
