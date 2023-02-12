import React from "react";
import TopMenu from "../topMenu/TopMenu";
import ProductSection from "../productSection/ProductSection";
import ServiceBar from "../serviceBar/ServiceBar";
import ProductCategories from "../productCategories/ProductCategories";
import Testimonials from "../testimonials/Testimonials";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import PopUp from "../popUp/PopUp";

function App() {
  const [activePopUp, setActivePopUp] = React.useState(false);
  const handleOpenPopUp = () => {
    setActivePopUp(true);
  };
  const handleClosePopUp = () => {
    setActivePopUp(false);
  };

  return (
    <div className="app">
      <TopMenu handleOpenPopUp={handleOpenPopUp} />
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
