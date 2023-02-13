import React from "react";
import SignUp from "../signUp/SignUp";

function Header() {
  const title = "Available soon. Join the waitlist!";
  const description =
    "The custom-fit furniture changing with you is almost here! Sign up for our product waitlist now to be the first to know when it becomes available. We'll send you a notification as soon as it's ready for purchase.";
  const postscript = (
    <p className="postscript">
      Common table is made of natural solid and <span>read more</span>
    </p>
  );
  return (
    <div className="header">
      <div className="shadow"></div>
      <div className="title">First custom-fit furniture changing with you.</div>
      <button className="seeMore">See more</button>
      <SignUp title={title} descripion={description} postscript={postscript} />
    </div>
  );
}

export default Header;
