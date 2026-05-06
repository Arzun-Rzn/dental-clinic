import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* COLUMN 1 */}
        <div className="footer-col">
          <h2 className="footer-logo">DentalCare</h2>
          <p>
            Providing advanced dental care with modern technology and a
            patient-first approach. Your smile is our priority.
          </p>

          <div className="socials">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>About</li>
            <li>Specialities</li>
            <li>Treatments</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div className="footer-col">
          <h3>Our Services</h3>
          <ul>
            <li>Dental Implants</li>
            <li>Root Canal</li>
            <li>Teeth Whitening</li>
            <li>Braces & Aligners</li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div className="footer-col">
          <h3>Contact Us</h3>

          <div className="contact-item">
            <Phone size={16} />
            <span>+91 98765 43210</span>
          </div>

          <div className="contact-item">
            <Mail size={16} />
            <span>info@dentalcare.com</span>
          </div>

          <div className="contact-item">
            <MapPin size={16} />
            <span>Hyderabad, India</span>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 DentalCare. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;