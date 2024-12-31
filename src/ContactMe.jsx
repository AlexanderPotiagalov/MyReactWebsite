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
      link: "https://www.linkedin.com/in/alexander-potiagalov/",
      icon: <FaLinkedin />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/a_lex_pot/?hl=en",
      icon: <FaInstagram />,
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/alexander.potiagalov.7/",
      icon: <FaFacebook />,
    },
    {
      name: "Twitter",
      link: "https://x.com/a_lex_pot",
      icon: <FaTwitter />,
    },
    {
      name: "Phone",
      icon: <FaPhone />,
      displayText: "604-352-5948",
    },
    {
      name: "Email",
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
