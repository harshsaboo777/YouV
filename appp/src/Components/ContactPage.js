import React from "react";
import "../ComponentsStyles/ContactPage.css";

export const ContactPage = () => {
  const [Email, UpdateEmail] = React.useState("");

  const Handlechange = (event) => {
    UpdateEmail(event.target.value);
  };

  const Handlesubmit = () => {
    alert("Email sent Successfully! You will be contacted soon.");
    UpdateEmail("");
  };

  return (
    <div className="ContactPageBody">
      <div className="ContactPageHead">
        <div className="ContactPageHeading1">Get a free trial lesson today</div>
        <div className="ContactPageHeading2">
          Start fulfilling your language dreams with our school
        </div>
      </div>

      <div className="ContactPageEmail">
        <div className="ContactPageInputBox">
          <input
            type="text"
            value={Email}
            onChange={Handlechange}
            className="ContactPageInput"
            placeholder="Enter your email"
          />
        </div>
        <button
          className="ContactPageSubmit ContactPageFont1"
          onClick={Handlesubmit}
        >
          Send
        </button>
      </div>
    </div>
  );
};
