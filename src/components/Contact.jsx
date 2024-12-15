import React from "react";
import "../styles/Contact.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-container">
             {/* Icono de Volver */}
             <div className="back-button2">
        <Link to="/" className="back-link2">
          <FaArrowLeft className="back-icon" /> Back to Home
        </Link>
      </div>
      <h1 className="contact-title">Contact Me</h1>

      <div className="contact-info">
      <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a
            href="https://www.linkedin.com/in/kaddev97/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Kadir Ramirez
          </a>
        </div>

        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a
            href="https://wa.me/+50662375946"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            +506 6237 5946
          </a>
        </div>

 
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:kadirramirez19@gmail.com" className="contact-link">
          kadirramirez19@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
