import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const GetInvolvedTeaser = () => {
  const navigate = useNavigate();

  return (
    <section className="get-involved-teaser">
      <h2>Your Role in Global Fest</h2>
      <p>
        Global Fest 2026 thrives because of the people who support it. Whether you
        sponsor, showcase your work as a vendor, or volunteer your time, every
        contribution helps us celebrate diversity and build a stronger community.
        Your involvement ensures that voices from all cultures are heard, traditions
        are honored, and new connections are made. By joining us, you’re not just
        supporting a festival — you’re helping create a vibrant space where stories,
        music, food, and art come together to inspire unity and joy. Together, we can
        make Global Fest 2026 a landmark celebration that leaves a lasting impact on
        Toronto and beyond.
      </p>

      <div className="promo-columns">
        <div className="promo-column">
          <img src="/gbfest/food vendor.jpg" alt="Food Vendors" />
          <h3>Food Vendors</h3>
          <p>
            Become a food vendor and showcase global fusion dishes — from Asian street eats
            to Caribbean and Mediterranean favorites. Share your culinary story with thousands.
          </p>
          <button className="teaser-btn">Become a Food Vendor</button>
        </div>

        <div className="promo-column">
          <img src="/gbfest/sponsor.png" alt="Sponsorship Opportunities" />
          <h3>Sponsorship Opportunities</h3>
          <p>
            Gain visibility through stage presence, digital campaigns, and on-site activations.
            Celebrate diversity and community at Canada’s largest fusion festival.
          </p>
          <button className="teaser-btn">Become a Sponsor</button>
        </div>

        <div className="promo-column">
          <img src="/gbfest/cultural.jpg" alt="Cultural Performances" />
          <h3>Cultural Performances</h3>
          <p>
            Join our lineup of live music, dance, and cultural showcases that blend tradition
            with modern flair. Experience global fusion on one stage.
          </p>
          <button className="teaser-btn">Become a Performer</button>
        </div>
      </div>

      <button
        className="teaser-btn explore-btn"
        onClick={() => navigate("/getinvolved")}
      >
        Explore Opportunities
      </button>
    </section>
  );
};

export default GetInvolvedTeaser;
