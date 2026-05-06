import { ChevronLeft, ChevronRight, User, UserRound } from "lucide-react";
import "../styles/Doctors.css";

function Doctors() {
  const doctors = [
    {
      name: "Dr. A Srikanth",
      role: "MDS, ORTHODONTIST",
      gender: "male",
    },
    {
      name: "Dr. Gowtham",
      role: "MD, BDS, MDS\nDirector, GA Dental",
      gender: "male",
    },
    {
      name: "Dr. Divya Reddy",
      role: "BDS, DENTAL SURGEON",
      gender: "female",
    },
    {
      name: "Dr. K. Kiran Kumar",
      role: "MDS, IMPLANTOLOGIST, ORTHODONTIST",
      gender: "male",
    },
  ];

  return (
    <div className="doctors">
      <div className="doctors-container">

        <h2>
          Meet Our <span>Expert Dental Team</span>
        </h2>
        <p>100+ Years Of Combined Experience!</p>

        <div className="doctors-grid">
          {doctors.map((doc, index) => (
            <div className="doctor-card" key={index}>
              
              <div className="img-wrapper placeholder">
                {doc.gender === "female" ? (
                  <UserRound size={70} />
                ) : (
                  <User size={70} />
                )}
              </div>

              <h3>{doc.name}</h3>
              <span>{doc.role}</span>
            </div>
          ))}
        </div>

        <div className="slider-controls">
          <button><ChevronLeft size={18} /></button>
          <button><ChevronRight size={18} /></button>
        </div>

        <div className="cta">
          <button className="cta-btn">Book a Dental Checkup</button>
          <p>OR CALL: <span>9505 44 3330</span></p>
        </div>

      </div>
    </div>
  );
}

export default Doctors;