import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-content">
        <h2 className="contact-heading">
          Still Not Sure?{' '}
          <span className="highlight">Talk to our Senior Dentist</span>
        </h2>

        <p className="contact-subtext">
          Discuss your dental problem before coming down to our client
        </p>

        <div className="contact-form">
          <input
            type="tel"
            className="phone-input"
            placeholder="99990 12345"
            defaultValue="99990 12345"
          />
          <button className="callback-btn">GET A CALL BACK</button>
        </div>

        <p className="direct-call">
          OR CALL: <span className="phone-number">9505 44 3330</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;