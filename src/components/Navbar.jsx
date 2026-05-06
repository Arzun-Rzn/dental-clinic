import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [showSpecialities, setShowSpecialities] = useState(false);
  const [showTreatments, setShowTreatments] = useState(false);

  const specialities = [
    "Cosmetic Dentistry",
    "Aesthetic Restorations",
    "Digital Smile Design",
    "Teeth Whitening",
    "Smile Makeover/Designing",
    "Endodontics",
    "General Dentistry",
    "Implantology",
    "Oral Surgery",
    "Orthodontics",
    "Pedodontics",
    "Periodontics",
    "Prosthodontics",
  ];

  const treatments = [
    "Dental Fillings / Teeth Fillings",
    "Root Canal Treatment (RCT)",
    "Dental Braces & Aligners",
    "Dental Bridges",
    "Hybrid Dentures",
    "Kids Dentistry",
    "Mouth Ulcers",
    "Laser Gum Treatment",
    "Dental Implants",
    "Dental Crowns",
    "Laser Dentistry",
    "GBT Cleaning",
    "Laser Teeth Cleaning",
    "Contact-less Screening",
    "3D Digital Screening",
    "Preventive Dentistry",
  ];

  return (
    <nav className="navbar">
        <div className="navbar-container">
        {/* LEFT */}
        <div className="navbar-left">
            <div className="logo">🦷</div>
            <h2 className="title">DentalCare</h2>
        </div>

        {/* CENTER */}
        <ul className="navbar-links">
            <li>About</li>

            <li
            className="dropdown"
            onMouseEnter={() => setShowSpecialities(true)}
            onMouseLeave={() => setShowSpecialities(false)}
            >
            Specialities
            {showSpecialities && (
                <div className="dropdown-menu">
                {specialities.map((item, index) => (
                    <span key={index}>{item}</span>
                ))}
                </div>
            )}
            </li>

            <li
            className="dropdown"
            onMouseEnter={() => setShowTreatments(true)}
            onMouseLeave={() => setShowTreatments(false)}
            >
            Treatments
            {showTreatments && (
                <div className="dropdown-menu">
                {treatments.map((item, index) => (
                    <span key={index}>{item}</span>
                ))}
                </div>
            )}
            </li>

            <li>Feedbacks</li>
            <li>Contact</li>
        </ul>

        {/* RIGHT */}
        <div className="navbar-right">
            <span className="phone">+91 98765 43210</span>
            <button className="book-btn">Book Now</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;