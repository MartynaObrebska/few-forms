import React from "react";
import { useCallback, useEffect, useState } from "react";
import { screenLg, screenWrapper } from "../../../utility/breakpoints";
import image1 from '../../../assets/lay-on-sofa.webp'
import image2 from '../../../assets/phone-screen1.webp'
import image3 from '../../../assets/machine.webp'
import image4 from '../../../assets/drawer.webp'
import image5 from '../../../assets/phone-screen2.webp'
import CategoriesCarouselDesktop from "./categoriesCarouselDesktop/CategoriesCarouselDesktop"

const CategoriesCarouselMobile = React.lazy(
  () => import("./categoriesCarouselMobile/CategoriesCarouselMobile")
);

import "./productCategories.css";

function ProductCategories() {
  const categories = [
    { image: image1, title: "Stress-free experience.", description: 'Designed online in less than 1 hour, delivered within 1 week, assembled easily with 1 tool.' },
    { image: image2, title: "No design skills required.", description: 'Design recommendations based on your needs, not your design skills and powered by algorithms. ' },
    { image: image3, title: "Serialised, but bespoke.", description: 'As custom as bespoke, but manufactured serially, due to proprietary hardware innovations.' },
    { image: image4, title: "Reconfigurable & reusable.", description: 'Switch, extend or shrink if your needs change or return furniture and get a pay back.' },
    { image: image5, title: "Furniture as a service.", description: 'First custom-fit furniture available in subscription, to enjoy furniture without ownership downsides.' },
  ];

  const slides = categories.map((category, index) => (
    <div key={index} className="category">
      <div className="picture-container">
        <img src={category.image} />
      </div>
      <div className="bottom-section">
        <div className="title">{category.title}</div>
        <div className="description">{category.description}</div>
      </div>

    </div>
  ));

  const slideWidth = 530;
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
