import React, { useEffect, useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formType, setFormType] = useState("COSMATIC");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID and Public Key

    const serviceId = "service_qqf1lm3";
    const templateId = "template_q1ub0mi";
    const publicKey = "OCyXhJvlhEsA9U1QS";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Vikash Namdev",
      message: message,
      Mobnumber: number,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey);
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
        setNumber("");
      })
      .catch((error) => {
        console.error("Error sending email: ", error);
      });
  };

  const inputRef = useRef();

  useEffect(() => {
    if (isButtonClicked && inputRef.current) {
      inputRef.current.focus();
      // setIsButtonClicked(false); // reset
    }
  }, [formType, isButtonClicked]);

  return (
    <div className="contact-section" id="contact">
      <div className="main-section left-section">
        <h1>Make an appointment</h1>
        <div>Fill the form and our team will reach out to you!</div>
      </div>

      <div className="main-section  right-section">
        <div className="right-section-heading">SERVICE NEEDED?</div>

        <div className="right-section-btns">
          <button
            className={formType === "PREVENTIVE" ? "formbtn" : ""}
            onClick={() => {
              setFormType("PREVENTIVE");
              setIsButtonClicked(true);
            }}
          >
            PREVENTIVE
          </button>
          <button
            className={formType === "COSMATIC" ? "formbtn" : ""}
            onClick={() => {
              setFormType("COSMATIC");
              setIsButtonClicked(true);
            }}
          >
            COSMATIC
          </button>
          <button
            className={formType === "ORTHODONTIC" ? "formbtn" : ""}
            onClick={() => {
              setFormType("ORTHODONTIC");
              setIsButtonClicked(true);
            }}
          >
            ORTHODONTIC
          </button>
        </div>

        <div>
          {formType === "PREVENTIVE" && (
            <form className="right-section-form" onSubmit={handleSubmit}>
              <input
                type="text"
                required
                placeholder="Your name"
                ref={inputRef}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                required
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="textarea"
                required
                placeholder="Enter your problem"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit" className="sendbtn">
                Send Request <FiSend className="sendbtnIcon" />
              </button>
            </form>
          )}

          {formType === "COSMATIC" && (
            <form onSubmit={handleSubmit} className="right-section-form">
              <input
                type="text"
                required
                placeholder="Your name"
                ref={inputRef}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                required
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="sendbtn">
                Send Request <FiSend className="sendbtnIcon" />
              </button>
            </form>
          )}

          {formType === "ORTHODONTIC" && (
            <form onSubmit={handleSubmit} className="right-section-form">
              <input
                type="text"
                required
                placeholder="Your name"
                ref={inputRef}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                required
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                required
                placeholder="Your mobile number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <input
                type="textarea"
                required
                placeholder="Enter your problem"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <button type="submit" className="sendbtn">
                Send Request <FiSend className="sendbtnIcon" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
