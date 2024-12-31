import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  const contactInfo = [
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/your-profile",
      icon: <FaLinkedin />,
    },
    {
      name: "Instagram",
      link: "https://instagram.com/your-profile",
      icon: <FaInstagram />,
    },
    {
      name: "Facebook",
      link: "https://facebook.com/your-profile",
      icon: <FaFacebook />,
    },
    {
      name: "Twitter",
      link: "https://twitter.com/your-profile",
      icon: <FaTwitter />,
    },
    {
      name: "Phone",
      link: "tel:+1234567890",
      icon: <FaPhone />,
      displayText: "604-352-5948",
    },
    {
      name: "Email",
      link: "apa168@sfu.ca",
      icon: <FaEnvelope />,
      displayText: "apa168@sfu.ca",
    },
  ];

  return (
    <div className="contact-section">
      <h2 className="contact-heading">Get in Touch</h2>
      <div className="contact-container">
        {contactInfo.map((info, index) => (
          <div className="contact-card" key={index}>
            <a
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div className="contact-icon">{info.icon}</div>
              <div className="contact-name">
                {info.displayText ? info.displayText : info.name}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
