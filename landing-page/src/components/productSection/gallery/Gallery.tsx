import { Carousel } from "react-responsive-carousel";

const Gallery = () => {
  const pictures = [
    "picture1",
    "picture2",
    "picture3",
    "picture4",
    "picture5",
    "picture6",
  ];

  const renderThumbs = () =>
    pictures.map((picture, index) => (
      <div key={index} className={`picture thumbPicture ${picture}`} />
    ));
  const renderArrowPrev = (onClickHandler: () => void, hasPrev: boolean) => (
    <div onClick={onClickHandler} className="arrow left" />
  );
  const renderArrowNext = (onClickHandler: () => void, hasPrev: boolean) => (
    <div onClick={onClickHandler} className="arrow right" />
  );
  return (
    <Carousel
      infiniteLoop
      renderThumbs={renderThumbs}
      showStatus={false}
      width="820px"
      thumbWidth={134}
      renderArrowPrev={renderArrowPrev}
      renderArrowNext={renderArrowNext}
    >
      {pictures.map((picture, index) => (
        <div key={index} className={`picture ${picture}`} />
      ))}
    </Carousel>
  );
};
export default Gallery;
