import React from "react";
import JoinBtn from "../joinBtn/JoinBtn";
import UnderBar from "../underBar/UnderBar";

interface Props {
  activeTopMenu: boolean;
  handleOpenPopUp: () => void;
}

function TopMenu(props: Props) {
  const topMenuClassName = props.activeTopMenu ? "topMenu" : "topMenu disabled";
  return (
    <div className={topMenuClassName}>
      <div className="home">
        <div className="logo" />
        <p className="spaceSystem">Space System</p>
      </div>
      <JoinBtn handleClick={props.handleOpenPopUp} />
      <UnderBar />
    </div>
  );
}
export default TopMenu;
