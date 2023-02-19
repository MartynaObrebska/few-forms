import { useState } from "react";
import JoinBtn from "../joinBtn/JoinBtn";

interface Props {
  title: string;
  descripion: string;
  note: JSX.Element;
  handleClosePopUp?: () => void;
}

function SignUp(props: Props) {
  const { title, descripion, note, handleClosePopUp } = props;

  const [state, setState] = useState<"default" | "success" | "incorrect">(
    "default"
  );

  const handleJoinBtnClick = () => {};

  return (
    <div className="signUp">
      <h2 className="title">{title}</h2>
      <p className="description">{descripion}</p>
      <label htmlFor="email">
        Email<span>*</span>
      </label>
      <input
        placeholder="Enter your email"
        type="email"
        id="email"
        required
      ></input>
      <JoinBtn handleClick={handleJoinBtnClick} />
      {note}
      <div className="close" onClick={handleClosePopUp} />
    </div>
  );
}

export default SignUp;
