import SignUp from "../signUp/SignUp";
import "./header.css";

interface Props {
  headerRef: React.MutableRefObject<HTMLDivElement | null>
  handleClickScroll: () => void;
}

function Header(props: Props) {
  const content = {
    defaultState: {
      title: "Seed Update Newsletter",
      description:
        "Stay up-to-date on our company's progress and development by subscribing to our Seed Update Newsletter. We are sending updates every few months and don’t bother if not neccessary.",
      note: 'Common table is made of natural solid',
    },
    successState: {
      title: "You have joined the waitlist!",
      description:
        "Thank you for joining the waitlist. We will contact you, when product will be available to purchase. Meanwhile, occasionally we will be sending you any news about the product. ",
    },
  };

  return (
    <div ref={props.headerRef} className="header">
      <div className="shadow"></div>
      <div className="title">First furniture,<br />changing with you.</div>
      <SignUp content={content} />
    </div>
  );
}

export default Header;
