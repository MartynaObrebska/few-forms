import React, { MutableRefObject, useEffect, useState } from "react";
import JoinBtn from "../joinBtn/JoinBtn";
import UnderBar from "./underBar/UnderBar";

interface Props {
  productSectionRef: MutableRefObject<HTMLDivElement | null>;
  handleHomeBtn: () => void;
  handleOpenPopUp: () => void;
  activePopUp: boolean;
}

function TopMenu(props: Props) {
  const { productSectionRef, handleHomeBtn, handleOpenPopUp, activePopUp } =
    props;
  const [activeTopMenu, setActiveTopMenu] = useState(true);
  const [scrollValue, setScrollValue] = useState(0);
  const topMenuClassName = `topMenu${activeTopMenu ? "" : "  disabled"}`;

  useEffect(() => {
    if (activePopUp) setActiveTopMenu(true);
    const handleScroll = () => {
      const verticalScrollValue = window.scrollY;
      if (verticalScrollValue <= 0) setActiveTopMenu(true);
      setActiveTopMenu(verticalScrollValue <= scrollValue);
      setScrollValue(verticalScrollValue);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollValue, activePopUp]);

  return (
    <div className={topMenuClassName}>
      <div className="topMenuContainer">
        <div className="home" onClick={handleHomeBtn}>
          <div className="logo" />
          <p className="spaceSystem">Space System</p>
        </div>
        <JoinBtn handleClick={handleOpenPopUp} />
      </div>
      <UnderBar
        activePopUp={activePopUp}
        scrollValue={scrollValue}
        productSectionRef={productSectionRef}
      />
    </div>
  );
}
export default TopMenu;
