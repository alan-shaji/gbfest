import React from "react";
import MenuTab from "../../components/menuTab";
import Homeslide from "../../components/Homeslide";
import AboutUsPreview from "../../components/About Us";
import Footer from "../../components/footer";
import Volunteer from "../../components/volunteer";
import Countdown from "../../components/Countdown";
import GetInvolvedTeaser from "../../components/Get Invovled teaser";
import FAQ from "../../components/FAQ";
import EventLocation from "../../components/location";


const Home = () => {
  return (
    <div className="home-page">
      {/* <MenuTab />   fixed header */}
      <Homeslide />
      
      <AboutUsPreview />
      <Countdown />
      <GetInvolvedTeaser />
      <FAQ />
      <EventLocation />
      <Volunteer />
      <section className="home-section">
        {/* Blank white section for now */}
      </section>
       {/* <Footer /> */}
    </div>
  );
};

export default Home;
