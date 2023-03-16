import { useState } from "react";
import JoinBtn from "../joinBtn/JoinBtn";
import "./signUp.css";

interface Props {
  content?: {
    defaultState: {
      title: string;
      description: string;
      note: string;
    };
    successState?: {
      title: string;
      description: string;
    };
  };
  handleClosePopUp?: () => void;
}

function SignUp(props: Props) {
  const { content, handleClosePopUp } = props;

  const [signUpState, setSignUpState] = useState<"default" | "success">(
    "default"
  );

  const handleJoinBtnClick = () => {
    setSignUpState("success");
  };

  const defaultState = (
    <div className="state">
      <h2 className="title" dangerouslySetInnerHTML={{ __html: content?.defaultState.title ?? '' }} />
      <p className="description">{content?.defaultState.description}</p>
      <label htmlFor="email">
        <input
          placeholder="Your Email"
          type="email"
          id="email"
          required
        ></input>
        <JoinBtn handleClick={handleJoinBtnClick} />
      </label>
      <p className="note">{content?.defaultState.note}{' '}<u>Privacy Policy</u></p>
    </div >
  );

  const succesState = (
    <div className="state">
      <div className="icon" />
      <h2 className="title success">{content?.successState?.title}</h2>
      <p className="description">{content?.successState?.description}</p>
    </div>
  );

  return (
    <div className="signUp">
      <div className="close" onClick={handleClosePopUp} />
      {signUpState === "default" ? defaultState : succesState}
    </div>
  );
}

export default SignUp;
