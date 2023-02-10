import React from "react";
import JoinBtn from "../joinBtn/JoinBtn";
import UnderBar from "../underBar/UnderBar";

function TopMenu() {
  return (
    <div className="topMenu">
      <div className="logo" />
      <p className="spaceSystem">Space System</p>
      <JoinBtn />
      <UnderBar />
    </div>
  );
}
export default TopMenu;
