import React from "react";
import SignUp from "../signUp/SignUp";

interface Props {
  handleClosePopUp: () => void;
}

function PopUp(props: Props) {
  const title = "Join waitlist!";
  const description =
    "Sign up for our product waitlist and we will notify you as soon as it becomes available.";
  const note = (
    <p className="note">
      Common table is made of natural solid wood and wooden veneer. Ash is hard,
      resistant and good quality wood. It is light
    </p>
  );
  return (
    <div className="popUp">
      <div className="background" onClick={props.handleClosePopUp} />
      <SignUp
        title={title}
        descripion={description}
        note={note}
        handleClosePopUp={props.handleClosePopUp}
      />
    </div>
  );
}

export default PopUp;
