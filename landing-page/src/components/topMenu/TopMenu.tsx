import React, { MutableRefObject, useEffect, useState } from "react";
import JoinBtn from "../joinBtn/JoinBtn";
import UnderBar from "./underBar/UnderBar";

interface Props {
  productSectionRef: MutableRefObject<HTMLDivElement | null>;
  handleHomeBtn: () => void;
  handleOpenPopUp: () => void;
}

function TopMenu(props: Props) {
  const { productSectionRef, handleHomeBtn, handleOpenPopUp } = props;
  const [activeTopMenu, setActiveTopMenu] = useState(true);
  const [scrollValue, setScrollValue] = useState(0);
  const topMenuClassName = `topMenu${activeTopMenu ? "" : "  disabled"}`;

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setActiveTopMenu(scrolled <= scrollValue);
      setScrollValue(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollValue]);

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
        scrollValue={scrollValue}
        productSectionRef={productSectionRef}
      />
    </div>
  );
}
export default TopMenu;
