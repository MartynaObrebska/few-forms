import React from "react";

interface Props {
  handleClick?: () => void;
}

function JoinBtn(props: Props) {
  return (
    <button className="joinBtn" onClick={props.handleClick}>
      Join waitlist
    </button>
  );
}

export default JoinBtn;
