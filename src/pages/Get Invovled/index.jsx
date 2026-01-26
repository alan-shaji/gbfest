import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const GetInvolved = () => {
  const navigate = useNavigate();

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);


  return (
    <section className="get-involved">
       <h1>Together We Thrive</h1>
  

      {/* Sponsorship (image right) */}
      <div className="involved-row row-reverse">
        <img src="/gbfest/sponsor.png" alt="Sponsorship" />
        <div className="involved-content">
          <h2>Partnership </h2>
          <p>
      Partnership is the backbone of Global Fest. Your contribution directly
      supports cultural performances, community outreach, and the creation of
      inclusive spaces where diverse voices can be heard. By sponsoring, you
      align your brand with values of unity, diversity, and celebration.
    </p>
    <p>
      Sponsors also gain visibility across our marketing channels, event
      signage, and digital platforms, ensuring your support is recognized by
      thousands of attendees. Together, we can build a festival that leaves a
      lasting impact.
    </p>
          <button className="involved-btn"
          onClick={() => navigate("/partner")}>
            Become a Partner</button>
        </div>
      </div>

      {/* Vendors (image left) */}
      <div className="involved-row">
        <img src="/gbfest/vendor.jpg" alt="Vendors" />
        <div className="involved-content">
          <h2>Vendors</h2>
          <p>
      Vendors bring flavor, creativity, and culture to Global Fest. Whether
      through food, crafts, or unique products, you help attendees experience
      the richness of traditions from around the world.
    </p>
    <p>
      Being a vendor means more than selling — it’s about storytelling. Each
      dish, craft, or item reflects heritage and innovation, giving festival
      goers a chance to connect with cultures in a tangible way. Vendors also
      benefit from exposure to a diverse audience eager to discover new
      experiences.
    </p>
          <button className="involved-btn">Join as a Vendor</button>
        </div>
      </div>

      {/* Volunteers (image right) */}
      <div className="involved-row row-reverse">
        <img src="volunteer.png" alt="Volunteers" />
        <div className="involved-content">
          <h2>Volunteers</h2>
          <p>
      Volunteers are the heart of Global Fest. Your dedication ensures smooth
      operations, welcoming smiles, and the energy that makes the festival
      unforgettable. From logistics to guest support, every role contributes to
      the success of the event.
    </p>
    <p>
      Volunteering is also an opportunity to grow. You’ll gain hands-on
      experience in event management, meet people from diverse backgrounds, and
      be part of something bigger than yourself. It’s not just helping — it’s
      creating memories and building community.
    </p>
          <button
            className="involved-btn"
            onClick={() => navigate("/volunteer")}
          >
            Join as a Volunteer
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
