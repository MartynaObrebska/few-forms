import React from "react";
import JoinBtn from "../../joinBtn/JoinBtn";

function SignUp() {
  return (
    <div className="signUp">
      <h2>Available soon. Join the waitlist!</h2>
      <p>
        The custom-fit furniture changing with you is almost here! Sign up for
        our product waitlist now to be the first to know when it becomes
        available. We'll send you a notification as soon as it's ready for
        purchase.
      </p>
      <label>Email</label>
      <input placeholder="Enter your email"></input>
      <JoinBtn />
      <p className="postscript">
        Common table is made of natural solid and <span>read more</span>
      </p>
    </div>
  );
}

export default SignUp;
