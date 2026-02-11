import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const AboutUsDetail = () => {

  const navigate = useNavigate();

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <div className="about-detail-page">
      <div className="about-header">
        <h1>About Global Fest Canada</h1>
        <div className="accent-line"></div>
      </div>

      <p className="about-text">
        IYC Canada leads youth empowerment and cultural engagement across Toronto, supporting newcomers and diverse communities through impactful programs and events.
        Partnering with Levitate Entertainment, we bring these values to life through major multicultural festivals that unite audiences and offer strong activation opportunities for sponsors.
      </p>

      <div className="about-section">
        <h1>OUR VISION</h1>
        <div className="accent-line small"></div>
        <p className="about-text">
          To create a globally connected community where youth and diverse cultures unite through creativity , innovation and shared celebration.
        </p>
      </div>

      <div className="about-section">
        <h1>OUR MISSION</h1>
        <div className="accent-line small"></div>
        <p className="about-text">
          To empower multicultural communities by providing inclusive platforms that amplify culture, opportunity and collective impact.
        </p>
      </div>
    </div>
  );
};

export default AboutUsDetail;
