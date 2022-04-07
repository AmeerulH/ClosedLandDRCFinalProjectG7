import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import Typical from "react-typical";
import loadingImg from "../images/loading.svg";
import LogoCube from "../../Components/Animations/Cube/Cube";
import LogoCube2 from "../../Components/Animations/Cube/Cube2";
import "animate.css";

const Home = () => {
  const [isLoading, setLoading] = useState(false);

  let navigate = useNavigate();

  function handleNav(text) {
    if (text === "Explore") {
      navigate("/explore");
    } else if (text === "Sign up with Deriv") {
      navigate("/signup");
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const steps = ["Discover new projects and right at your fingertips.", 5000];

  return (
    <div className="home">
      <Row className="homeLanding g-0">
        <Row className="animate__animated animate__fadeIn animate__delay-1s g-0">
          <h1 className="imgH1">
            Learn, Discover and Explore{" "}
            <span style={{ color: "#FE6047" }}>NFTS</span>
          </h1>
        </Row>
        <Row className="animate__animated animate__fadeIn  animate__delay-1s g-0">
          <Typical
            steps={steps}
            loop={Infinity}
            wrapper="h2"
            className="imgH2"
          />
        </Row>
        <Row className="bGroup g-0">
          <Button
            className="animate__animated animate__bounceIn animate__delay-1s b1"
            onClick={(e) => handleNav(e.target.textContent)}
          >
            Explore
          </Button>
          <Col xs={1}></Col>
          <Button
            className="animate__animated animate__bounceIn animate__delay-1s b2"
            onClick={(e) => handleNav(e.target.textContent)}
          >
            Sign up with Deriv
          </Button>
        </Row>
      </Row>
      <Container className="squareAssets animate__animated animate__fadeIn animate__delay-1s">
        {isLoading === false ? (
          <div>
            <LogoCube></LogoCube>
            <LogoCube2></LogoCube2>
          </div>
        ) : (
          <img className="loadingHome" src={loadingImg} />
        )}
      </Container>
    </div>
  );
};

export default Home;
