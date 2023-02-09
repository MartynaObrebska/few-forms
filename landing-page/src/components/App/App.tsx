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
  return (
    <div className="app">
      <TopMenu />
      <Header />
      <ProductSection />
      <ServiceBar />
      <ProductCategories />
      <Testimonials />
      <Footer />
      <PopUp />
    </div>
  );
}

export default App;
