import { useState, useRef } from "react";

interface Props {
  sliderActive: boolean;
  slides: JSX.Element[];
  parts: number;
}

function InfiniteCarousel(props: Props) {
  const { sliderActive, slides, parts } = props;

  const [visiblePart, setVisiblePart] = useState(0);
  const categoriesListRef = useRef<HTMLDivElement | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const carouselPartWidth =
    (categoriesListRef.current && carouselRef.current
      ? categoriesListRef.current.offsetWidth - carouselRef.current.offsetWidth
      : 0) / parts;

  const sliderWidth = sliderRef.current ? sliderRef.current.offsetWidth : 0;

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
    <div ref={carouselRef} className="carousel-container">
      <div className="carousel">
        <div
          ref={categoriesListRef}
          className="categories-list"
          style={{ left: calculateCarouselLeftMargin() }}
        >
          {slides}
        </div>
        <div
          className={`arrow left ${visiblePart === 0 ? "disabled" : ""}`}
          onClick={visiblePart === 0 ? undefined : scrollLeft}
        />
        <div
          className={`arrow right ${visiblePart === parts ? "disabled" : ""}`}
          onClick={visiblePart === parts ? undefined : scrollRight}
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

export default InfiniteCarousel;
