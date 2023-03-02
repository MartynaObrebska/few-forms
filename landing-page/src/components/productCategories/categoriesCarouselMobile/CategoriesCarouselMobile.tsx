import { useRef } from "react";
import { Carousel } from "react-responsive-carousel";
interface Props {
  slides: JSX.Element[];
  slidePercentage: number | undefined;
}
function CategoriesCarouselMobile(props: Props) {
  const isCenterMode = document.body.clientWidth >= 600;

  const sliderRef = useRef<HTMLDivElement | null>(null);

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
        swipeable={true}
        emulateTouch={true}
      >
        {props.slides}
      </Carousel>
    </div>
  );
}

export default CategoriesCarouselMobile;
