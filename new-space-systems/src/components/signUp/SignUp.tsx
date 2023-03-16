import { useState } from "react";
import JoinBtn from "../joinBtn/JoinBtn";
import "./signUp.css";

interface Props {
  content?: {
    defaultState: {
      title: string;
      description: string;
      note: string;
    };
    successState?: {
      title: string;
      description: string;
    };
  };
}

function SignUp(props: Props) {
  const { content } = props;
  return (
    <div className="signUp">
      <div className="state">
        <h2 className="title" dangerouslySetInnerHTML={{ __html: content?.defaultState.title ?? '' }} />
        <p className="description">{content?.defaultState.description}</p>
        {/* klaviyo integration starts */}
        <form id="email_signup" action="https://manage.kmail-lists.com/subscriptions/subscribe?a=TrpaAx&g=VUgtgK" method="POST">
          <label htmlFor="email"><input
            type="hidden"
            name="g"
            value="VUgtgK"
          //LIST_ID_HERE 
          />
            <input
              type="email"
              name="email"
              id="k_id_email"
              placeholder="Your email"
              required />
            <JoinBtn submit={true} /></label>
        </form>
        <p className="note">{content?.defaultState.note}{' '}<u>Privacy Policy</u></p>
      </div >
    </div>
  );
}

export default SignUp;
