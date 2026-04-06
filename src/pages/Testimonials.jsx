import React, { useState } from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { IoArrowDown } from "react-icons/io5";

const faqData = [
  {
    question: "Does having dental work done cause pain?",
    answer:
      "The majority of dental procedures are stress-free. Thanks to skilled dental procedures and modern dental anesthetic. Every visit is intended to be as gentle as possible.",
  },
  {
    question: "Do you operate in a sterile setting?",
    answer:
      "Yes, all treatments are performed in a fully sterile and hygienic environment following strict medical standards.",
  },
  {
    question:
      "Do you provide customized treatment strategies for every patient?",
    answer:
      "Yes, every patient receives a customized treatment plan based on their dental condition.",
  },
  {
    question: "Can people of all ages undergo German dental procedures safely?",
    answer:
      "Yes, our treatments are designed to be safe and effective for patients of all age groups.",
  },
  {
    question: "How frequently should I visit the dentist?",
    answer:
      "It is recommended to visit your dentist every six months for routine checkups.",
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="specialitiesContainer" id="testimonials">
      <div className="specialitiesTextContainer">
        <div>ASK US MORE</div>

        <h2>Frequently Asked Questions</h2>

        <div>
          Make better decisions about your care by reading the answers to the
          <br />
          <span>questions we have received most often.</span>
        </div>
      </div>

      <div className="FAQ-section">
        {faqData.map((item, index) => (
          <div
            className={`FAQ-item ${active === index ? "active" : ""}`}
            onClick={() => toggle(index)}
            key={index}
          >
            <div className="FAQ-question">
              <h3>{item.question}</h3>
              <span className="arrow"> <IoArrowDown /></span>
            </div>

            <div className="FAQ-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="inquiry-section">
        <div>
          STILL HAVE A QUESTION?
        </div>

        <button><FaRegCircleQuestion className="btnIcon" />Send us an inquiry</button>
      </div>

    </div>
  );
}

export default Testimonials;
