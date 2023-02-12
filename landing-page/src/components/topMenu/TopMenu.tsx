import React from "react";
import JoinBtn from "../joinBtn/JoinBtn";
import UnderBar from "../underBar/UnderBar";

interface Props {
  handleOpenPopUp: () => void;
}

function TopMenu(props: Props) {
  return (
    <div className="topMenu">
      <div className="logo" />
      <p className="spaceSystem">Space System</p>
      <JoinBtn handleClick={props.handleOpenPopUp} />
      <UnderBar />
    </div>
  );
}
export default TopMenu;
