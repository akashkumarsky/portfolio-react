import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id='contact' className="contact-container">
      {/* Left Column: Contact Info */}
      <div className="contact-info">
        <h2>Contact Info</h2>
        <div className="info-item">
          <FaEnvelope className="info-icon" />
          <p>Email: akash220701@gamil.com</p>
        </div>
        <div className="info-item">
          <FaPhone className="info-icon" />
          <p>Phone: 7004972052/9263281215</p>
        </div>
        <div className="info-item">
          <FaMapMarkerAlt className="info-icon" />
          <p>Address: Bengalore, India</p>
        </div>
      </div>

      {/* Right Column: Email Form */}
      <div className="contact-form">
        <h2>Send a Message</h2>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Name" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Message" rows="5" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
