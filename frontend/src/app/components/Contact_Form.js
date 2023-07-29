import React from "react";
import formStyles from "../styles/contact-form.module.css";
import infoStyles from "../styles/contact-info.module.css";

export default function Contact_Form() {
  return (
    <div className={formStyles.content_container}>

      <div className={infoStyles.container}>
        <p className={infoStyles.light_red_text}>Contact us</p>
        <h3 className={infoStyles.h3_name}>Let's // work // together?</h3>
        <p className={infoStyles.white_text}>
          If you're in search of a top-tier Valorant team, don't hesitate to
          reach out to us!
        </p>
      </div>

      <div className={formStyles.form_container}>
        <div>
          <h3 className={formStyles.h2_name}>Contact // Us // Today</h3>
        </div>

        <form className={formStyles.contact}>
          <div>
            <div className={formStyles.name_column}>
              <label for="Fname">First Name</label>
              <input type="text" id="Fname" name="First Name" />
            </div>
            <div className={formStyles.name_column}>
              <label for="Lname">Last Name</label>
              <input type="text" id="Lname" name="Last Name" />
            </div>
          </div>

          <div>
            <label for="Com/Org">Company / Organization</label>
            <input type="text" id="Com/Org" name="Company/Organization" />
          </div>

          <div>
            <label for="Email">Email</label>
            <input type="email" id="Email" name="Email" />
          </div>

          <div>
            <label for="Message">Message</label>
            <input type="text" id="Message" name="Message" />
          </div>

          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
