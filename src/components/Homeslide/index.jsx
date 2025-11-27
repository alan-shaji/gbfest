import React from "react";
import "./index.css";

const Homeslide = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-overlay">
        <h1>Global Fest Canada 2026</h1>
        <h2>Where cultures, creativity, and youth come to play.</h2>
        <p className="event-details">
          📅 June 21, 2026 &nbsp; 📍 Sankofa Street, Toronto &nbsp; 🆓 Free Entry
        </p>
        <div className="hero-buttons">
          <a href="#program" className="hero-btn primary">Free Entry – Save the Date</a>
          <a href="#program" className="hero-btn secondary">Explore Program</a>
        </div>
        
        <p className="hero-credits">
          Organized by <strong>International Youth Canada</strong><br />
          Powered by <strong>Levitate Entertainment</strong><br />
          <em>A youth-led, community-powered festival</em>
        </p>
      </div>
    </section>
  );
};

export default Homeslide;
