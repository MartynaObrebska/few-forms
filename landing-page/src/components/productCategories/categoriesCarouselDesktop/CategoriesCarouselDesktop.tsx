import { useState, useRef } from "react";

interface Props {
  slides: JSX.Element[];
}

function CategoriesCarouselDesktop(props: Props) {
  const [visiblePart, setVisiblePart] = useState(0);
  const [eventPosition, setEventPosition] = useState<number | null>(null);
  const slidesListRef = useRef<HTMLDivElement | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const parts = 3;

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

  const scrollLeft = (parts = 1) => {
    setVisiblePart(visiblePart - parts);
  };

  const scrollRight = (parts = 1) => {
    setVisiblePart(visiblePart + parts);
  };

  // Handle drag events
  const handleEventStart = (e: React.DragEvent | React.TouchEvent) => {
    const eventDown =
      e.nativeEvent instanceof TouchEvent
        ? e.nativeEvent.touches[0].clientX
        : e.nativeEvent.clientX ?? 0;

    setEventPosition(eventDown);
  };

  const handleEventMove = (
    e: React.TouchEvent<HTMLDivElement> | React.DragEvent<HTMLDivElement>,
    isCarousel = true
  ) => {
    const eventDown = eventPosition;

    if (eventDown === null) {
      return;
    }

    const currentTouch =
      e.nativeEvent instanceof TouchEvent
        ? e.nativeEvent.touches[0].clientX
        : e.nativeEvent.clientX ?? 0;

    const diff = eventDown - currentTouch;

    if (isCarousel ? diff > 5 : diff < 5) {
      isRightArrowDisabled ? undefined : scrollRight();
    }

    if (isCarousel ? diff < -5 : diff > -5) {
      isLeftArrowDisabled ? undefined : scrollLeft();
    }
    setEventPosition(null);
  };

  // Handle slider click events
  const handleSliderButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setVisiblePart(Number((e.target as HTMLButtonElement).id));
  };

  const sliderButtons = ["0", "1", "2", "3"].map((part) => (
    <button
      key={part}
      id={part}
      className="slider-button"
      onClick={handleSliderButtonClick}
    />
  ));

  return (
    <div ref={carouselRef} className="categories-carousel-container">
      <div className="categories-carousel">
        <div
          ref={slidesListRef}
          className="slides-list"
          style={{ left: calculateCarouselLeftMargin() }}
          onDragStart={handleEventStart}
          onDragEnd={handleEventMove}
          onTouchStart={handleEventStart}
          onTouchMove={handleEventMove}
        >
          {props.slides}
        </div>
        <div
          className={`arrow left ${isLeftArrowDisabled ? "disabled" : ""}`}
          onClick={() => (isLeftArrowDisabled ? undefined : scrollLeft())}
        />
        <div
          className={`arrow right ${isRightArrowDisabled ? "disabled" : ""}`}
          onClick={() => (isRightArrowDisabled ? undefined : scrollRight())}
        />
      </div>
      <div className="slider-container">
        <div
          ref={sliderRef}
          className="slider"
          style={{ left: calculateSliderLeftMargin() }}
          onDragStart={handleEventStart}
          onDragEnd={(e) => handleEventMove(e, false)}
          onTouchStart={handleEventStart}
          onTouchMove={(e) => handleEventMove(e, false)}
        />
        {sliderButtons}
      </div>
    </div>
  );
}

export default CategoriesCarouselDesktop;
