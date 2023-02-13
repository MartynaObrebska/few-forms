import React, { useState, useEffect } from "react";
import TopMenu from "../topMenu/TopMenu";
import ProductSection from "../productSection/ProductSection";
import ServiceBar from "../serviceBar/ServiceBar";
import ProductCategories from "../productCategories/ProductCategories";
import Testimonials from "../testimonials/Testimonials";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import PopUp from "../popUp/PopUp";

function App() {
  const [activeTopMenu, setActiveTopMenu] = useState(true);
  const [activePopUp, setActivePopUp] = useState(false);
  // Pop up
  const handleOpenPopUp = () => {
    setActivePopUp(true);
  };
  const handleClosePopUp = () => {
    setActivePopUp(false);
  };
  // Scroll
  let scrollBefore = 0;
  const handleScroll = () => {
    const scrolled = window.scrollY;
    if (scrolled > scrollBefore) setActiveTopMenu(false);
    else setActiveTopMenu(true);
    scrollBefore = scrolled;
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <TopMenu
        activeTopMenu={activeTopMenu}
        handleOpenPopUp={handleOpenPopUp}
      />
      <Header />
      <ProductSection handleOpenPopUp={handleOpenPopUp} />
      <ServiceBar />
      <ProductCategories />
      <Testimonials handleOpenPopUp={handleOpenPopUp} />
      <Footer />
      {activePopUp && <PopUp handleClosePopUp={handleClosePopUp} />}
    </div>
  );
}

export default App;
