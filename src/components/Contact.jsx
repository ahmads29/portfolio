import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

// import './ContactForm.css';

function ContactForm() {
  const [state, handleSubmit] = useForm("mgvzwzwj");

  if (state.succeeded) {
    return <p>Thanks for reaching out!</p>;
  }

  return (
    <>
    <div className='contact-main-container'>

    <h3 className="colored-title">Contact</h3>
    <div className="contact-form-wrapper">
      {/* <div className="animated-bg purple"></div>
      <div className="animated-bg yellow"></div> */}

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="two-columns">
          <div>
            <label>First Name</label>
            <input type="text" name="firstName" required />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" name="lastName" required />
          </div>
        </div>

        <div className="two-columns">
          <div>
            <label>Country Code</label>
            <input type="text" name="countryCode" placeholder="+XXX" />
          </div>
          <div>
            <label>Phone Number</label>
            <input type="tel" name="phoneNumber" placeholder="123456789" required />
          </div>
        </div>

        <div>
          <label>Email Address</label>
          <input type="email" name="email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <label>Message</label>
          <textarea name="message" required />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <button type="submit" disabled={state.submitting}>Submit</button>
      </form>
    </div>
    </div>



    </>
  );
}

export default ContactForm;
