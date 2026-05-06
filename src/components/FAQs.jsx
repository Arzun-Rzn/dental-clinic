import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "../styles/FAQs.css";

function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "What All Services Do You Offer?",
      a: "We offer a wide range of dental services including implants, root canal treatments, whitening, braces, and more.",
    },
    {
      q: "How Experienced Are Your Dentists?",
      a: "Our dentists are highly experienced professionals with years of expertise in various dental specializations.",
    },
    {
      q: "Are The Treatments Really Painless?",
      a: "Yes, we use advanced techniques and equipment to ensure minimal discomfort during treatments.",
    },
    {
      q: "How Can I Be Assured Of My Treatment Results & Satisfaction?",
      a: "We follow a patient-first approach with proper consultation, planning, and follow-ups to ensure satisfaction.",
    },
    {
      q: "How Much Will My Visit Costs?",
      a: "The cost depends on the treatment. We provide transparent pricing after consultation.",
    },
    {
      q: "What If I Am Looking For A Second Opinion?",
      a: "You are welcome to consult us for a second opinion anytime.",
    },
    {
      q: "How Do I Reschedule Or Cancel My Appointment?",
      a: "You can call us directly to reschedule or cancel your appointment.",
    },
    {
      q: "What About Dental Emergencies?",
      a: "We provide emergency dental care. Please contact us immediately in urgent cases.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs">
      <div className="faqs-container">

        {/* HEADING */}
        <h2>
          Got Questions? <span>Here are some FAQs</span>
        </h2>
        <p>
          For Any Other Queries, you can call us at{" "}
          <span className="phone-highlight">9505 44 3330</span>
        </p>

        {/* LIST */}
        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <span>{item.q}</span>
                <ChevronDown
                  size={18}
                  className={activeIndex === index ? "rotate" : ""}
                />
              </div>

              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default FAQs;