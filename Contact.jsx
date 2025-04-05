import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    query: "",
  });

  const [notification, setNotification] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstName && formData.email && formData.query) {
      setNotification("Your message has been sent successfully!");
      setFormData({ firstName: "", email: "", query: "" }); 
      setTimeout(() => setNotification(""), 3000); 
    } else {
      setNotification("Please fill in all fields.");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1>Contact Us</h1>
        <p>Any questions or remarks? Just write us a message!</p>

        {notification && <div className="notification">{notification}</div>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-wrapper">
              <FaUser className="input-icon" />
              <input
                type="text"
                name="firstName"
                placeholder="Enter your First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-wrapper">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <textarea
              name="query"
              placeholder="Write your query here..."
              value={formData.query}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="contact-info">
        <div className="info-box">
          <FaEnvelope className="icon" />
          <h3>Email</h3>
          <p>support@travelx.com</p>
        </div>
        <div className="info-box">
          <FaPhone className="icon" />
          <h3>Phone</h3>
          <p>+1 234 567 890</p>
        </div>
        <div className="info-box">
          <FaMapMarkerAlt className="icon" />
          <h3>Office Location</h3>
          <p>123 Travel Street, New York, USA</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
