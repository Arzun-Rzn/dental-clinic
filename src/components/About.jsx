import { useEffect, useState } from "react";
import "../styles/About.css";

function About() {
  const images = ["/about1.jpeg", "/about2.jpeg", "/about3.jpeg"];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about">
      <div className="about-container">

        {/* LEFT */}
        <div className="about-left">
          <h2>About <span>Our Dental Clinic</span></h2>

          <p>
            Welcome to our state-of-the-art dental centers, where we provide
            world-class dental care using the latest technology and
            patient-first approach. Our clinics are designed to deliver
            comfort, precision, and excellence.
          </p>

          <p>
            With advanced equipment, expert specialists, and modern techniques,
            we ensure the highest quality treatments for all dental needs —
            from preventive care to complex procedures.
          </p>

          <button className="about-btn">Read More</button>
        </div>

        {/* RIGHT (SLIDER) */}
        <div className="about-right">
          <div className="slider">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className={index === current ? "active" : ""}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;