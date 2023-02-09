import React from "react";
import SignUp from "./signUp/SignUp";

function Header() {
  return (
    <div className="header">
      <div className="title">First custom-fit furniture changing with you.</div>
      <button className="seeMore">See more</button>
      <SignUp />
    </div>
  );
}

export default Header;
