import React from "react";
import { useCallback, useEffect, useState } from "react";
import { screenLg, screenWrapper } from "../../../utility/breakpoints";
import image from '../../../assets/Frame-1025.webp'
import CategoriesCarouselDesktop from "./categoriesCarouselDesktop/CategoriesCarouselDesktop"

const CategoriesCarouselMobile = React.lazy(
  () => import("./categoriesCarouselMobile/CategoriesCarouselMobile")
);

import "./productCategories.css";

function ProductCategories() {
  const categories = [
    { image: image, title: "Easy to design", description: 'We provide you with complete 3D models in compatible formats and developing the design tools build into your CAD software.' },
    { image: image, title: "Easy to design", description: 'We provide you with complete 3D models in compatible formats and developing the design tools build into your CAD software.' },
    { image: image, title: "Easy to design", description: 'We provide you with complete 3D models in compatible formats and developing the design tools build into your CAD software.' },
    { image: image, title: "Easy to design", description: 'We provide you with complete 3D models in compatible formats and developing the design tools build into your CAD software.' },
    { image: image, title: "Easy to design", description: 'We provide you with complete 3D models in compatible formats and developing the design tools build into your CAD software.' },
    { image: image, title: "Easy to design", description: 'We provide you with complete 3D models in compatible formats and developing the design tools build into your CAD software.' }
  ];

  const slides = categories.map((category, index) => (
    <div key={index} className="category">
      <div className="picture-container">
        <img src={image} />
      </div>
      <div className="bottom-section">
        <div className="title">{category.title}</div>
        <div className="description">{category.description}</div>
        </div>

    </div>
  ));

  const slideWidth = 510;
  const calculateSlidePercentage = () => {
    const widthToConsider =
      document.body.clientWidth >= screenWrapper
        ? screenWrapper
        : document.body.clientWidth;
    return (slideWidth / widthToConsider) * 100;
  };

  const [slidePercentage, setSlidePercentage] = useState<number | undefined>(
    calculateSlidePercentage()
  );
  const desktopView = document.body.clientWidth > screenLg;

  const resizeHandler = useCallback(() => {
    setSlidePercentage(calculateSlidePercentage());
  }, []);
  useEffect(() => {
    window.addEventListener("resize", resizeHandler, { passive: true });

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
      {desktopView ? (
        <CategoriesCarouselDesktop slides={slides} />
      ) : (
        <React.Suspense fallback={<></>}>
          <CategoriesCarouselMobile
            slides={slides}
            slidePercentage={slidePercentage}
          />
        </React.Suspense >
      )}
    </>
  );
}

export default ProductCategories;
