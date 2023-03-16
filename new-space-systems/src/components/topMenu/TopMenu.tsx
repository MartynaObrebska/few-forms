import { MutableRefObject, useEffect, useState } from "react";
import ContactBtn from "../ContactBtn/ContactBtn";
import JoinBtn from "../joinBtn/JoinBtn";
import "./topMenu.css";

interface Props {
  handleHomeBtn: () => void;
  handleContactBtn: () => void
}

function TopMenu(props: Props) {
  const { handleHomeBtn, handleContactBtn } =
    props;
  const [activeTopMenu, setActiveTopMenu] = useState(true);
  const [scrollValue, setScrollValue] = useState(0);
  const topMenuClassName = `topMenu${activeTopMenu ? "" : "  disabled"}`;

  useEffect(() => {
    const handleScroll = () => {
      const verticalScrollValue = window.scrollY;
      if (verticalScrollValue <= 0) setActiveTopMenu(true);
      setActiveTopMenu(verticalScrollValue <= scrollValue);
      setScrollValue(verticalScrollValue);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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
        <div className="buttons">
          <ContactBtn handleClick={handleContactBtn} />
          <JoinBtn handleClick={handleHomeBtn} />
        </div>
      </div>
    </div>
  );
}
export default TopMenu;
