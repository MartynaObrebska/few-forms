import React from "react";
import SignUp from "../signUp/SignUp";

interface Props {
  handleClosePopUp: () => void;
}

function PopUp(props: Props) {
  const title = "Join waitlist!";
  const description =
    "Sign up for our product waitlist and we will notify you as soon as it becomes available.";
  const postscript = (
    <p className="postscript">
      Common table is made of natural solid wood and wooden veneer. Ash is hard,
      resistant and good quality wood. It is light
    </p>
  );
  return (
    <div className="popUp">
      <div className="background"></div>
      <SignUp
        title={title}
        descripion={description}
        postscript={postscript}
        handleClosePopUp={props.handleClosePopUp}
      />
    </div>
  );
}

export default PopUp;
