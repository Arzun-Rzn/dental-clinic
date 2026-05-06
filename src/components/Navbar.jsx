import "../styles/Navbar.css";
import { Phone } from "lucide-react";

function Navbar() {
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
          <div className="logo">DC</div>
          <h2 className="title">DentalCare</h2>
        </div>

        {/* CENTER */}
        <ul className="navbar-links">
          <li>About</li>

          {/* SPECIALITIES */}
          <li className="dropdown-wrapper">
            <span className="nav-item">Specialities</span>
            <div className="dropdown-menu">
              {specialities.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </li>

          {/* TREATMENTS */}
          <li className="dropdown-wrapper">
            <span className="nav-item">Treatments</span>
            <div className="dropdown-menu">
              {treatments.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </li>

          <li>Feedbacks</li>
          <li>Contact</li>
        </ul>

        {/* RIGHT */}
        <div className="navbar-right">
            <div className="phone">
                <Phone size={16} />
                <span>+91 98765 43210</span>
            </div>

            <button className="book-btn">Book Now</button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;