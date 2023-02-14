import React from "react";
import JoinBtn from "../joinBtn/JoinBtn";
import UnderBar from "../underBar/UnderBar";

interface Props {
  activeTopMenu: boolean;
  handleHomeBtn: () => void;
  handleOpenPopUp: () => void;
}

function TopMenu(props: Props) {
  const { activeTopMenu, handleHomeBtn, handleOpenPopUp } = props;
  const topMenuClassName = activeTopMenu ? "topMenu" : "topMenu disabled";
  return (
    <div className={topMenuClassName}>
      <div className="home" onClick={handleHomeBtn}>
        <div className="logo" />
        <p className="spaceSystem">Space System</p>
      </div>
      <JoinBtn handleClick={handleOpenPopUp} />
      <UnderBar />
    </div>
  );
}
export default TopMenu;
