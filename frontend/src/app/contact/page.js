import React from "react";
import FormStyles from "../styles/contact-form.module.css";
import InfoStyles from "../styles/contact-info.module.css";
import Info from "../components/Contact_Info";
import Form from "../components/Contact_Form";

export default function page() {
  return (
    <div className={FormStyles.main}>
      <Info />
      <Form />
    </div>
  );
}
