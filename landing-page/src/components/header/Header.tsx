import SignUp from "../signUp/SignUp";
import "./header.css";

interface Props {
  handleClickScroll: () => void;
}

function Header(props: Props) {
  const content = {
    defaultState: {
      title: "Available soon. Join the waitlist!",
      description:
        "The custom-fit furniture changing with you is almost here! Sign up for our product waitlist now to be the first to know when it becomes available. We'll send you a notification as soon as it's ready for purchase.",
      note: 'Common table is made of natural solid',
    },
    successState: {
      title: "You have joined the waitlist!",
      description:
        "Thank you for joining the waitlist. We will contact you, when product will be available to purchase. Meanwhile, occasionally we will be sending you any news about the product. ",
    },
  };

  return (
    <div className="header">
      <div className="shadow"></div>
      <div className="title">First custom-fit furniture changing with you.</div>
      <button className="seeMore down" onClick={props.handleClickScroll}>
        See more
      </button>
      <button className="swipe down" onClick={props.handleClickScroll}>
        <p>swipe down</p>
        <div className="arrow" />
      </button>
      <SignUp content={content} />
    </div>
  );
}

export default Header;
