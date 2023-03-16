import { Carousel } from "react-responsive-carousel";

interface Props {
  slides: JSX.Element[];
}
function CategoriesCarouselMobile(props: Props) {

  const renderArrowPrev = (onClickHandler: () => void, hasPrev: boolean) => (
    <div onClick={onClickHandler} className="arrow left" />
  );
  const renderArrowNext = (onClickHandler: () => void, hasPrev: boolean) => (
    <div onClick={onClickHandler} className="arrow right" />
  );

  return (
    <div className="categories-carousel-container">
      <Carousel
        showIndicators={false}
        infiniteLoop={true}
        centerMode={false}
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
