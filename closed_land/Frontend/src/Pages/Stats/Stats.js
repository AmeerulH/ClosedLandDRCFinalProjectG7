import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
// import Navbar from "../../Components/Navbar";
import Ethcall from "../../Components/CombNav/Ethcall";
import StatsMobile from "./StatsMobile";
import StatsLaptop from "./StatsLaptop";
import { Container, Col, Row, Dropdown, Button } from "react-bootstrap";
import "./Stats.css";
import { FaEthereum } from "react-icons/fa";
import axios from "axios";

const Stats = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Ethcall />
      <StatsMobile></StatsMobile>
      <StatsLaptop></StatsLaptop>
      <Footer />
    </div>
  );
};

export default Stats;
