import SignUp from "../signUp/SignUp";
import "./popUp.css";

interface Props {
  handleClosePopUp: () => void;
}

function PopUp(props: Props) {
  const content = {
    defaultState: {
      title: "Join waitlist!",
      description:
        "Sign up for our product waitlist and we will notify you as soon as it becomes available.",
      note: "Common table is made of natural solid wood and wooden veneer. Ash is hard, resistant and good quality wood. It is light",
    },
    successState: {
      title: "You have joined the waitlist!",
      description:
        "Thank you for joining the waitlist. We will contact you, when product will be available to purchase. Meanwhile, occasionally we will be sending you any news about the product. ",
    },
  };
  return (
    <div className="popUp">
      <div className="background" onClick={props.handleClosePopUp} />
      <SignUp content={content} handleClosePopUp={props.handleClosePopUp} />
    </div>
  );
}

export default PopUp;
