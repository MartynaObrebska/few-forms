import { useRef } from "react";
import { Carousel } from "react-responsive-carousel";
interface Props {
  slidePercentage?: number;
}
function CategoriesCarouselMobile(props: Props) {
  const isCenterMode = document.body.clientWidth >= 600;

  const sliderRef = useRef<HTMLDivElement | null>(null);

  const categories = [
    "Bookcase",
    "Bookcase",
    "Bookcase",
    "Bookcase",
    "Bookcase",
  ];

  const slides = categories.map((category, index) => (
    <div key={index} className="category-container">
      <div className="category">
        <div className="picture-container">
          <div className="picture" />
        </div>
        <div className="name">{category}</div>
      </div>
    </div>
  ));

  const renderArrowPrev = (onClickHandler: () => void, hasPrev: boolean) => (
    <div onClick={onClickHandler} className="arrow left" />
  );
  const renderArrowNext = (onClickHandler: () => void, hasPrev: boolean) => (
    <div onClick={onClickHandler} className="arrow right" />
  );

  return (
    <div className="categories-carousel-container">
      <Carousel
        infiniteLoop={document.body.clientWidth <= 600}
        centerMode={isCenterMode}
        centerSlidePercentage={isCenterMode ? props.slidePercentage : undefined}
        showStatus={false}
        showThumbs={false}
        renderArrowPrev={renderArrowPrev}
        renderArrowNext={renderArrowNext}
      >
        {slides}
      </Carousel>
    </div>
  );
}

export default CategoriesCarouselMobile;
