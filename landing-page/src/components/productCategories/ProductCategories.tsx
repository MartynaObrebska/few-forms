import { useCallback, useEffect, useState } from "react";
import { screenLg } from "../../utility/breakpoints";
import CategoriesCarouselDesktop from "./categoriesCarouselDesktop/CategoriesCarouselDesktop";
import CategoriesCarouselMobile from "./categoriesCarouselMobile/CategoriesCarouselMobile";

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

  const wrapperWidth = 1440;
  const slideWidth = 315;
  const calculateSlidePercentage = () => {
    const widthToConsider =
      document.body.clientWidth >= wrapperWidth
        ? wrapperWidth
        : document.body.clientWidth;
    return (slideWidth / widthToConsider) * 100;
  };

  const [slidePercentage, setSlidePercentage] = useState<number | undefined>(
    calculateSlidePercentage()
  );
  const resizeHandler = useCallback(() => {
    setSlidePercentage(calculateSlidePercentage());
  }, []);
  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const desktopView = document.body.clientWidth > screenLg;
  const baseClassName = `product-categories${
    desktopView ? "-desktop" : "-mobile"
  }`;
  return (
    <div className={baseClassName}>
      <div className={`${baseClassName}-content`}>
        <h1>Explore more furniture categories</h1>
        {desktopView ? (
          <CategoriesCarouselDesktop
            sliderActive={true}
            slides={slides}
            parts={3}
            carouselHeight={400}
          />
        ) : (
          <CategoriesCarouselMobile slidePercentage={slidePercentage} />
        )}
      </div>
    </div>
  );
}

export default ProductCategories;
