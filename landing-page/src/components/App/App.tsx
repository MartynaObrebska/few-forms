import { useState, useRef } from "react";
import TopMenu from "../topMenu/TopMenu";
import ProductSection from "../productSection/ProductSection";
import ServiceBar from "../serviceBar/ServiceBar";
import ProductCategories from "../productCategories/ProductCategories";
import Testimonials from "../testimonials/Testimonials";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import PopUp from "../popUp/PopUp";

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
      <TopMenu
        productSectionRef={productSectionRef}
        handleHomeBtn={handleHomeBtn}
        handleOpenPopUp={handleOpenPopUp}
        activePopUp={activePopUp}
      />
      <Header handleClickScroll={handleClickScroll} />
      <ProductSection
        productSectionRef={productSectionRef}
        handleOpenPopUp={handleOpenPopUp}
      />
      <ServiceBar />
      <ProductCategories />
      <Testimonials handleOpenPopUp={handleOpenPopUp} />
      <Footer />
      {activePopUp && <PopUp handleClosePopUp={handleClosePopUp} />}
    </div>
  );
}

export default App;
