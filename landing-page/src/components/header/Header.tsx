import SignUp from "../signUp/SignUp";

interface Props {
  handleClickScroll: () => void;
}

function Header(props: Props) {
  const title = "Available soon. Join the waitlist!";
  const description =
    "The custom-fit furniture changing with you is almost here! Sign up for our product waitlist now to be the first to know when it becomes available. We'll send you a notification as soon as it's ready for purchase.";
  const note = (
    <p className="note">
      Common table is made of natural solid and <span>read more</span>
    </p>
  );
  return (
    <div className="header">
      <div className="shadow"></div>
      <div className="title">First custom-fit furniture changing with you.</div>
      <button className="seeMore" onClick={props.handleClickScroll}>
        See more
      </button>
      <SignUp title={title} descripion={description} note={note} />
    </div>
  );
}

export default Header;
