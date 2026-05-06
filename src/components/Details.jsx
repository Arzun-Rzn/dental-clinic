import { MapPin, UserRound, Plane } from "lucide-react";
import "../styles/Details.css";

function Details() {
  return (
    <div className="details">
      <div className="details-container">

        {/* ITEM 1 */}
        <div className="details-item">
          <div className="icon-circle">
            <MapPin size={28} />
          </div>

          <div className="details-content">
            <h3>Locate Clinic</h3>
            <button>Visit Now →</button>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="details-item border">
          <div className="icon-circle">
            <UserRound size={28} />
          </div>

          <div className="details-content">
            <h3>Find A Dentist</h3>
            <button>Dental Experts →</button>
          </div>
        </div>

        {/* ITEM 3 */}
        <div className="details-item border">
          <div className="icon-circle">
            <Plane size={28} />
          </div>

          <div className="details-content">
            <h3>Explore Services</h3>
            <button>Book now →</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Details;