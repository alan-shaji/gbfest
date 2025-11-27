import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Volunteer = () => {
  return (
    <section className="volunteer">
      <h2>Join Us as a Volunteer</h2>
      <div className="volunteer-content">
        {/* Left: Text */}
        <div className="volunteer-text">
          <p>
            Without helping hands, nothing is possible. Volunteers are the
            heartbeat of Global Fest — they bring energy, creativity, and
            dedication to every performance and activity. By joining us, you’ll
            help create unforgettable experiences for thousands of visitors,
            while also building friendships and learning new skills.
          </p>
          <p>
            Whether you’re passionate about culture, music, logistics, or simply
            want to give back to the community, there’s a place for you in our
            team. Together, we can make Global Fest 2026 a celebration that
            truly unites Toronto.
          </p>
          <Link to="/volunteer" className="volunteer-link">
            Become a Volunteer
          </Link>
        </div>

        {/* Right: Image */}
        <div className="volunteer-image">
          <img src="/gbfest/volunteer.png" alt="Global Fest Volunteers" />
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
