import React from "react";
import { useCallback, useEffect, useState } from "react";
import { screenLg, screenWrapper } from "../../utility/breakpoints";
import "./productCategories.css";

const CategoriesCarouselDesktop = React.lazy(
  () => import("./categoriesCarouselDesktop/CategoriesCarouselDesktop")
);
const CategoriesCarouselMobile = React.lazy(
  () => import("./categoriesCarouselMobile/CategoriesCarouselMobile")
);

function ProductCategories() {
  const categories = [
    "Bookcase",
    "Bookcase",
    "Bookcase",
    "Bookcase",
    "Bookcase",
    "Bookcase",
  ];

  const slides = categories.map((category, index) => (
    <div key={index} className="category">
      <div className="picture-container">
        <div className="picture" />
      </div>
      <div className="name">{category}</div>
    </div>
  ));

  const slideWidth = 315;
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
    <div className="product-categories">
      <div className="product-categories-content">
        <h1>
          Explore more <span>furniture </span>categories
        </h1>
        <React.Suspense fallback={<div>Loading...</div>}>
          {desktopView ? (
            <CategoriesCarouselDesktop slides={slides} />
          ) : (
            <CategoriesCarouselMobile
              slides={slides}
              slidePercentage={slidePercentage}
            />
          )}
        </React.Suspense>
      </div>
    </div>
  );
}

export default ProductCategories;
