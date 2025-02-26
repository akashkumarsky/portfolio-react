


import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        // Replace the IDs below with your actual EmailJS service, template, and user IDs.
        emailjs.sendForm('service_7fgkjgh', 'template_1hy6zzi', form.current, 'dubPlBJKP5I-HP1we')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message. Please try again.');
            });
    };

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
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form-group">
                        <input type="text" name="from_name" placeholder="Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" name="form_email" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                        <input type="text" name="subject" placeholder="Subject" required />
                    </div>
                    <div className="form-group">
                        <textarea name="message" placeholder="Message" rows="5" required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
