import "../styles/Feedbacks.css";

function Feedbacks() {
  const reviews = [
    {
      name: "Niketa Singh",
      initials: "NS",
      treatment: "DENTAL CROWNS",
      review:
        "I strongly recommend people to visit our dental clinic for any dental related problem. The doctors are highly knowledgeable and the treatment approach is excellent.",
    },
    {
      name: "Krishna Deepthi",
      initials: "KD",
      treatment: "BRACES & CAVITIES",
      review:
        "The best decision I ever took was consulting our specialists. Every imperfection had been corrected and my smile looks perfect now.",
    },
    {
      name: "Paul Jennings",
      initials: "PJ",
      treatment: "DENTAL IMPLANTS",
      review:
        "I came especially for my dental implants treatment. The team was very caring and professional. I am extremely happy with the results.",
    },
    {
      name: "Sita Lama",
      initials: "SL",
      treatment: "BRACES TREATMENT",
      review:
        "My teeth were quite forward and I was very concerned. The braces treatment was smooth and the doctors guided me patiently.",
    },
    {
      name: "Abhilash P",
      initials: "AP",
      treatment: "ROOT CANAL",
      review:
        "I feared the treatment would be painful, but everything was completed quickly and comfortably. Excellent experience.",
    },
    {
      name: "Dasa Akhil",
      initials: "DA",
      treatment: "WISDOM TOOTH REMOVAL",
      review:
        "Heavy pain was resolved immediately after treatment. Friendly doctors and very supportive staff.",
    },
  ];

  return (
    <section className="feedbacks">
      <div className="feedbacks-container">
        <h2>
          Real Testimonials <span>From Real Patients</span>
        </h2>

        <p className="feedback-subtitle">
          650+ Google Reviews with <strong>5 Star Ratings</strong>
        </p>

        <div className="feedback-grid">
          {reviews.map((item, index) => (
            <div className="feedback-card" key={index}>
              <div className="feedback-header">
                <div className="avatar">{item.initials}</div>

                <div>
                  <h3>{item.name}</h3>
                  <div className="stars">★★★★★</div>
                  <span className="tag">{item.treatment}</span>
                </div>
              </div>

              <p className="review-text">{item.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feedbacks;