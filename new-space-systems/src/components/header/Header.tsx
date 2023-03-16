import SignUp from "../signUp/SignUp";
import "./header.css";

function Header() {
  const content = {
    defaultState: {
      title: "Venture Update</br>Newsletter",
      description:
        "Stay up-to-date on our company's progress and development by subscribing to our Seed Update Newsletter. We are sending updates every few months and don’t bother if not neccessary.",
      note: 'By clicking "Subscribe" I consent to receiving commercial information to the above e-mail address. I have read and accept the Privacy Policy.',
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
      <div className="title">Reusable<br />custom furniture.</div>
      <SignUp content={content} />
    </div>
  );
}

export default Header;
