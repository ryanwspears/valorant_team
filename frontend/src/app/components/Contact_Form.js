import React from 'react'
import formStyles from '../styles/contact-form.module.css'

export default function Contact_Form() {
  return (
    <div className={formStyles.container}>
    <h2 className={formStyles.h2_name}>Contact Us Today</h2>

    <form>

      <label for='Fname'>First Name</label>
      <input type='text' id="Fname" name='First Name' />

      <label for='Lname'>Last Name</label>
      <input type='text' id="Lname" name='Last Name' />

      <label for='Com/Org'>Company/Organization</label>
      <input type='text' id="Com/Org" name='Company/Organization' />

      <label for='Email'>Email</label>
      <input type='email' id="Email" name='Email' />

      <label for='Message'>Message</label>
      <input type='text' id="Message" name='Message' />
    </form>

    </div>
  );
}
