import React, { useState } from "react";
import "./index.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Global Fest 2026?",
      answer:
        "Global Fest 2026 is a multicultural celebration featuring performances, food, vendors, and community activities that highlight the diversity of Toronto."
    },
    {
      question: "How can I participate as a volunteer?",
      answer:
        "You can join our volunteer team by filling out the volunteer form. Volunteers help with event setup, guest support, logistics, and more."
    },
    {
      question: "How do I become a vendor?",
      answer:
        "Vendors can apply through our vendor registration process. We welcome food stalls, artisans, cultural crafts, and unique products."
    },
    {
      question: "Can my business sponsor the event?",
      answer:
        "Yes! Sponsorship opportunities are available for businesses of all sizes. Sponsors receive visibility, branding, and community engagement benefits."
    },
    {
  question: "Is entry to Global Fest 2026 free?",
  answer:
    "Yes! Global Fest 2026 is completely free for all attendees. Our goal is to create an inclusive celebration where everyone can enjoy the performances, food, and cultural experiences without any barriers."
},
{
  question: "What happens if it rains during the event?",
  answer:
    "The festival continues rain or shine. We have weather‑ready plans in place, including covered areas, tents, and adjusted schedules if needed. Performances and activities may shift slightly, but the celebration will still go on."
}

  ];

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>

      <div className="faq-container">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {item.question}
              <span className="faq-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>

            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
