import {
  Smile,
  Shield,
  Sparkles,
  AlignCenter,
  FlaskConical,
  Wand2,
  Activity,
  MoreHorizontal,
} from "lucide-react";

import "../styles/Specialities.css";

function Specialities() {
  const data = [
    {
      icon: <Smile size={40} />,
      title: "DENTAL IMPLANTS",
      desc: "Single Day Procedure",
    },
    {
      icon: <Shield size={40} />,
      title: "ROOT CANAL",
      desc: "Save Your Natural Tooth",
    },
    {
      icon: <Sparkles size={40} />,
      title: "WHITENING",
      desc: "Brighten Your Smile",
    },
    {
      icon: <AlignCenter size={40} />,
      title: "BRACES",
      desc: "Straighten Your Teeth",
    },
    {
      icon: <FlaskConical size={40} />,
      title: "LASER DENTISTRY",
      desc: "Gums Correction & Healing",
    },
    {
      icon: <Wand2 size={40} />,
      title: "SMILE DESIGNING",
      desc: "Get Beautiful Smile",
    },
    {
      icon: <Activity size={40} />,
      title: "EMERGENCY DENTISTRY",
      desc: "Available 24x7",
    },
    {
      icon: <MoreHorizontal size={40} />,
      title: "MORE",
      desc: "Other Treatments",
    },
  ];

  return (
    <div className="specialities">
      <div className="specialities-container">
        
        {/* HEADING */}
        <h2>
          Specialised Treatments <span>For You</span>
        </h2>
        <p>At GA Dental, We Have A Specialist for Every Treatment</p>

        {/* GRID */}
        <div className="specialities-grid">
          {data.map((item, index) => (
            <div className="card" key={index}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <span>{item.desc}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Specialities;