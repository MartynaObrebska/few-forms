import { useRef, useState, useEffect, useCallback } from "react";
import JoinBtn from "../joinBtn/JoinBtn";
import Slider from "infinite-react-carousel";

interface Props {
  handleOpenPopUp: () => void;
}

function Testimonials(props: Props) {
  const slideWidth = 315;
  const wrapperWidth = 1440;
  const calculateSlidesToShow = () => {
    if (document.body.clientWidth >= wrapperWidth)
      return wrapperWidth / slideWidth;
    return document.body.clientWidth / slideWidth;
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

  const resizeHandler = useCallback(() => {
    setSlidesToShow(calculateSlidesToShow());
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="testimonials">
      <div className="testimonials-content">
        <h1 className="title">Reviews</h1>
        <p className="description">
          Meet the community of People and of Interior Designer, that believe
          into Space System furniture.
        </p>
        <JoinBtn handleClick={props.handleOpenPopUp} />
        <div className="reviewsContainer">
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
