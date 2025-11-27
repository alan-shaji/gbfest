import React from "react";
import "./index.css";

const EventLocation = () => {
  return (
    <section className="event-location">
      <h2>Where the Event Is Happening</h2>

      <p className="location-intro">
        Global Fest 2026 will take place in the heart of Toronto, bringing
        together communities from across the city for a vibrant celebration of
        culture, music, food, and art. The venue is easily accessible by public
        transit, with plenty of nearby amenities for families and visitors.
      </p>

      <div className="location-tile">
        <div className="location-details">
          <h3>📍 Venue</h3>
          <p>Nathan Phillips Square, Toronto</p>

          <h3>🗓 Date</h3>
          <p>August 15–17, 2026</p>

          <h3>⏰ Time</h3>
          <p>10:00 AM – 10:00 PM daily</p>

          <h3>🚇 Transit</h3>
          <p>Steps away from Queen Station (Line 1)</p>
        </div>

        <div className="location-map">
          <iframe
            title="Global Fest Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.512770930934!2d-79.3853609239353!3d43.65348167110264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d6b7f7f0d7%3A0xdbc1e2d2f6c6714!2sNathan%20Phillips%20Square!5e0!3m2!1sen!2sca!4v1700000000000"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default EventLocation;
