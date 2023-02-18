import React from "react";
import JoinBtn from "../joinBtn/JoinBtn";

interface Props {
  handleOpenPopUp: () => void;
}

function Testimonials(props: Props) {
  const reviews = [
    "@mmlstudio",
    "@mmlstudio",
    "@mmlstudio",
    "@mmlstudio",
    "@mmlstudio",
    "@mmlstudio",
    "@mmlstudio",
  ];
  return (
    <div className="testimonials">
      <div className="testimonials-content">
        <h1 className="title">Reviews</h1>
        <p className="description">
          Meet the community of People and of Interior Designer, that believe
          into Space System furniture.
        </p>
        <JoinBtn handleClick={props.handleOpenPopUp} />
        <div className="reviews">
          <div className="reviews-list">
            {reviews.map((review, index) => (
              <div key={index} className="review">
                <div className="picture">
                  <div className="picture-content" />
                </div>
                <div className="text">
                  <p className="text-content">
                    I am over the moon, this is the next step in furniture
                    evolution!
                  </p>
                  <p className="name">{review}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="arrow left" />
          <div className="arrow right" />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
