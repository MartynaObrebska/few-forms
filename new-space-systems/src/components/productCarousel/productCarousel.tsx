import image1 from '../../assets/lay-on-sofa.webp'
import image2 from '../../assets/phone-screen1.webp'
import image3 from '../../assets/machine.webp'
import image4 from '../../assets/drawer.webp'
import image5 from '../../assets/phone-screen2.webp'
import './productCarousel.css'
import { useState, useCallback, useEffect, Suspense } from 'react';
import CategoriesCarouselDesktop from './categoriesCarouselDesktop/CategoriesCarouselDesktop';
import CategoriesCarouselMobile from './categoriesCarouselMobile/CategoriesCarouselMobile';

const ProductCarousel = () => {
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

  const desktopView = document.body.clientWidth > 1024;

  const slideWidth = 315;
  const calculateSlidePercentage = () => {
    const widthToConsider =
      document.body.clientWidth >= 1440
        ? 1440
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
    window.addEventListener("resize", resizeHandler, { passive: true });

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return <div className="product-categories">
    <div className="product-categories-content">
      <h2>Rethinking the way we manufacture, design, buy, use furniture.</h2>

      <Suspense fallback={<></>}>
        {desktopView ? (
          <CategoriesCarouselDesktop slides={slides} />
        ) : (
          <CategoriesCarouselMobile
            slides={slides}
            slidePercentage={slidePercentage}
          />
        )}
      </Suspense>
    </div>
  </div>
}

export default ProductCarousel