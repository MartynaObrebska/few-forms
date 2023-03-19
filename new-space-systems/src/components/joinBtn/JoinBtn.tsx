import "./joinBtn.css";

interface Props {
  submit?: boolean
  handleClick?: () => void;
}

function JoinBtn(props: Props) {
  return (
    <button className="joinBtn" onClick={props?.handleClick} type={props.submit ? 'submit' : undefined}>
      <div>Subscribe</div>
    </button>
  );
}

export default JoinBtn;
