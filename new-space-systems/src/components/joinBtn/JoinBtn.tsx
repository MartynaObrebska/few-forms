import "./joinBtn.css";

interface Props {
  handleClick?: () => void;
}

function JoinBtn(props: Props) {
  return (
    <button className="joinBtn" onClick={props.handleClick}>
      Subscribe
    </button>
  );
}

export default JoinBtn;
