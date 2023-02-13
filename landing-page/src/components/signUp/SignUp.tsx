import React from "react";
import JoinBtn from "../joinBtn/JoinBtn";

interface Props {
  title: string;
  descripion: string;
  postscript: JSX.Element;
  handleClosePopUp?: () => void;
}

function SignUp(props: Props) {
  const { title, descripion, postscript, handleClosePopUp } = props;
  return (
    <div className="signUp">
      <h2 className="title">{title}</h2>
      <p className="description">{descripion}</p>
      <label>
        Email<span>*</span>
      </label>
      <input placeholder="Enter your email" type="text" required></input>
      <JoinBtn />
      {postscript}
      <div className="close" onClick={handleClosePopUp} />
    </div>
  );
}

export default SignUp;
