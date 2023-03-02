import { useState, useEffect, useCallback } from "react";
import JoinBtn from "../joinBtn/JoinBtn";
import Slider from "infinite-react-carousel";
import { screenLg, screenSm, screenWrapper } from "../../utility/breakpoints";
import "./testimonials.css";

interface Props {
  handleOpenPopUp: () => void;
}

function Testimonials(props: Props) {
  const slideWidth = document.body.offsetWidth > screenSm ? 315 : 250;
  const calculateSlidesToShow = () => {
    const isScreenWiderThanWrapper = document.body.offsetWidth <= screenWrapper;
    const widthToConsider = isScreenWiderThanWrapper
      ? document.body.offsetWidth
      : screenWrapper;
    return widthToConsider / slideWidth;
  };
  const [slidesToShow, setSlidesToShow] = useState<number | undefined>(
    calculateSlidesToShow()
  );
  const reviews = [
    "@mmlstudio",
    "@mmlstudio",
    "@mmlstudio",
    "@mmlstudio",
    "@mmlstudio",
    "@mmlstudio",
    "@mmlstudio",
  ];

  const description = {
    long: "Meet the community of People and of Interior Designer, that believe into Space System furniture.",
    short: "Community of Consumer and Interior Designer, that already joined!.",
  };

  const resizeHandler = useCallback(() => {
    setSlidesToShow(calculateSlidesToShow());
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler, { passive: true });

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="testimonials">
      <div className="testimonials-content">
        <h1 className="title">Reviews</h1>
        <p className="description">
          {document.body.offsetWidth > screenLg
            ? description.long
            : description.short}
        </p>
        <JoinBtn handleClick={props.handleOpenPopUp} />
        <div className="reviews-container">
          <Slider
            slidesToShow={slidesToShow}
            centerMode={true}
            centerPadding={0}
          >
            {reviews.map((review, index) => (
              <div key={index} className="review-container">
                <div className="review">
                  <div className="pictureContainer">
                    <div className="picture" />
                  </div>
                  <div className="textContainer">
                    <p className="text">
                      I am over the moon, this is the next step in furniture
                      evolution!
                    </p>
                    <p className="name">{review}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
