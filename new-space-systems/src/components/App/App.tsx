import { useState, useRef, Suspense, lazy } from "react";
import TopMenu from "../topMenu/TopMenu";
import Header from "../header/Header";
import "./app.css";

const BottomSection = lazy(() => import("./BottomSection/BottomSection"));
function App() {
  const [activePopUp, setActivePopUp] = useState(false);
  const productSectionRef = useRef<HTMLDivElement | null>(null);
  const letsGetInTouchRef = useRef<HTMLDivElement | null>(null);

  // Home
  const handleHomeBtn = () => {
    if (window.scrollY > 0) {
      document.body.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll
  const handleContactBtn = () => {
    console.log(letsGetInTouchRef)
    letsGetInTouchRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      <Suspense fallback={<></>}>
        <TopMenu
          handleHomeBtn={handleHomeBtn}
          handleContactBtn={handleContactBtn}
        />
      </Suspense>
      <Header />
      <Suspense fallback={<></>}>
        <BottomSection
          productSectionRef={productSectionRef}
          letsGetInTouchRef={letsGetInTouchRef}
        />
      </Suspense>
    </div>
  );
}

export default App;
