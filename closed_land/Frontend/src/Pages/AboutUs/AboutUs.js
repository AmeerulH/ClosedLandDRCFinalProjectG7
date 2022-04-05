import React, { useState } from "react";
import Ethcall from "../../Components/CombNav/Ethcall";
import VisionMission from "./VisionMission";
import "./AboutUs.css";
import AccStats from "./AccStats";
import OurStory from "./OurStory";
import WhyNFT from "./WhyNFT";
import Employee from "./Employee";
import Footer from "../../Components/Footer/Footer";

const AboutUs = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mainaboutus">
      <Ethcall />
      <VisionMission />
      {/* <AccStats /> */}
      <OurStory />
      <WhyNFT />
      <Employee />
      <Footer />
    </div>
  );
};

export default AboutUs;
