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
      <h1 className="title">Reviews</h1>
      <p className="description">
        Meet the community of People and of Interior Designer, that believe into
        Space System furniture.
      </p>
      <JoinBtn handleClick={props.handleOpenPopUp} />
      <div className="reviewsContainer">
        <div className="reviewsList">
          {reviews.map((review) => (
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
          ))}
        </div>
        <div className="arrow left" />
        <div className="arrow right" />
      </div>
    </div>
  );
}

export default Testimonials;
