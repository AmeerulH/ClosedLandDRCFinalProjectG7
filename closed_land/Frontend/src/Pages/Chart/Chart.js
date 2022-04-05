import React from "react";
import Ethcall from "../../Components/CombNav/Ethcall";
import Footer from "../../Components/Footer/Footer";
import Convert from "./converter";
import Tab from "./tab-chart";
import "./chart.css";
import LineChart from "./LineChart";

const Chart = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="chartPage">
      <Ethcall />
      <Convert />
      <Tab />
      <Footer />
    </div>
  );
};

export default Chart;
