import { MutableRefObject, useEffect, useState } from "react";
import JoinBtn from "../joinBtn/JoinBtn";
import "./topMenu.css";

interface Props {
  productSectionRef: MutableRefObject<HTMLDivElement | null>;
  handleHomeBtn: () => void;
}

function TopMenu(props: Props) {
  const { handleHomeBtn } =
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
        <JoinBtn handleClick={handleHomeBtn} />
      </div>
    </div>
  );
}
export default TopMenu;
