import { useState, useRef, Suspense, lazy } from "react";
import TopMenu from "../topMenu/TopMenu";
import Header from "../header/Header";
import "./app.css";

const BottomSection = lazy(() => import("./BottomSection/BottomSection"));
function App() {
  const [activePopUp, setActivePopUp] = useState(false);
  const productSectionRef = useRef<HTMLDivElement | null>(null);
  // Home
  const handleHomeBtn = () => {
    if (window.scrollY > 0) {
      document.body.scrollIntoView({ behavior: "smooth" });
    }
  };
  // Pop up
  const handleOpenPopUp = () => {
    setActivePopUp(true);
  };
  const handleClosePopUp = () => {
    setActivePopUp(false);
  };
  // Scroll
  const handleClickScroll = () => {
    productSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      <Suspense fallback={<></>}>
        <TopMenu
          productSectionRef={productSectionRef}
          activePopUp={activePopUp}
          handleHomeBtn={handleHomeBtn}
          handleOpenPopUp={handleOpenPopUp}
        />
      </Suspense>
      <Header handleClickScroll={handleClickScroll} />
      <Suspense fallback={<></>}>
        <BottomSection
          activePopUp={activePopUp}
          productSectionRef={productSectionRef}
          handleOpenPopUp={handleOpenPopUp}
          handleClosePopUp={handleClosePopUp}
        />
      </Suspense>
    </div>
  );
}

export default App;
