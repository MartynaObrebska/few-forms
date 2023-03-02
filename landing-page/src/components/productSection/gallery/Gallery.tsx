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
      <button
        key={index}
        className={`picture thumbPicture ${picture}`}
        aria-label={`thumb button ${index}`}
      />
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
      thumbWidth={144}
      renderArrowPrev={renderArrowPrev}
      renderArrowNext={renderArrowNext}
      swipeable={true}
      emulateTouch={true}
      renderIndicator={(
        clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
        isSelected: boolean,
        index: number,
        label: string
      ) => (
        <li
          className={`dot${isSelected ? " selected" : ""}`}
          value={index}
          aria-label={`slide item ${index}`}
        >
          <button
            className="dot-button"
            type="button"
            onClick={clickHandler}
            aria-label={`slide button ${index}`}
          />
        </li>
      )}
    >
      {pictures.map((picture, index) => (
        <div key={index} className={`picture ${picture}`} />
      ))}
    </Carousel>
  );
};
export default Gallery;
