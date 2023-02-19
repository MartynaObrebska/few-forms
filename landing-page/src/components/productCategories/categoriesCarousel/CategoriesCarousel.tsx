import { useState, useRef } from "react";

interface Props {
  sliderActive: boolean;
  slides: JSX.Element[];
  parts: number;
  carouselHeight: number;
  transitionSpeed?: number;
}

function CategoriesCarousel(props: Props) {
  const { sliderActive, slides, parts, carouselHeight } = props;

  const [visiblePart, setVisiblePart] = useState(0);
  const slidesListRef = useRef<HTMLDivElement | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const carouselPartWidth =
    (slidesListRef.current && carouselRef.current
      ? slidesListRef.current.offsetWidth - carouselRef.current.offsetWidth
      : 0) / parts;

  const sliderWidth = sliderRef.current ? sliderRef.current.offsetWidth : 0;

  const isLeftArrowDisabled = visiblePart === 0;
  const isRightArrowDisabled = visiblePart === parts;

  const calculateCarouselLeftMargin = () => {
    return `-${visiblePart * carouselPartWidth}px`;
  };

  const calculateSliderLeftMargin = () => {
    return `${visiblePart * sliderWidth}px`;
  };

  const scrollLeft = () => {
    setVisiblePart(visiblePart - 1);
  };

  const scrollRight = () => {
    setVisiblePart(visiblePart + 1);
  };

  return (
    <div ref={carouselRef} className="categories-carousel-container">
      <div
        className="categories-carousel"
        style={{ height: `${carouselHeight}px` }}
      >
        <div
          ref={slidesListRef}
          className="slides-list"
          style={{ left: calculateCarouselLeftMargin() }}
        >
          {slides}
        </div>
        <div
          className={`arrow left ${isLeftArrowDisabled ? "disabled" : ""}`}
          onClick={isLeftArrowDisabled ? undefined : scrollLeft}
        />
        <div
          className={`arrow right ${isRightArrowDisabled ? "disabled" : ""}`}
          onClick={isRightArrowDisabled ? undefined : scrollRight}
        />
      </div>
      {sliderActive && (
        <div className="slide-container">
          <div
            ref={sliderRef}
            className="slider"
            style={{ left: calculateSliderLeftMargin() }}
          />
        </div>
      )}
    </div>
  );
}

export default CategoriesCarousel;
