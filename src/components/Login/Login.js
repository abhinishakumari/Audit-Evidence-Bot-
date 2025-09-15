import React from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { FaEnvelope, FaGlobe } from "react-icons/fa";

// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

import sprintoLogo from "../../images/sprinto-logo.png";
import image1 from "../../images/image1.jpeg";
import image2 from "../../images/image2.jpeg";
import image3 from "../../images/image3.jpeg";

const Login = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/Landing"); // Navigate to landing page
  };

  // Array of carousel slides
  const slides = [
    {
      img: image1,
      title: "Compiliance Simplified",
      desc: "Have your squad's productivity at your fingertips!",
    },
    {
      img: image2,
      title: "Evidence on Demand",
      desc: "Instant insights when you need them.",
    },
    {
      img: image3,
      title: "Powered by AI",
      desc: "Transforming productivity through automation.",
    },
  ];

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Left Side - Carousel */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#0f1010ff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <Carousel indicators controls interval={3000} fade style={{ width: "100%", height: "100%" }}>
          {slides.map((slide, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={slide.img}
                alt={`Slide ${index + 1}`}
                style={{
                  height: "100%",
                  maxHeight: "80vh",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <Carousel.Caption style={{ bottom: "20px" }}>
                <h3>{slide.title}</h3>
                <p>{slide.desc}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Right Side - Login */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: "80px",
          position: "relative",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <img
            src={sprintoLogo}
            alt="Sprinto Logo"
            style={{ width: "200px", marginBottom: "10px" }}
          />
          <h1 style={{ color: "#151515ff", marginBottom: "15px" }}>
            AI-Powered Evidence-on-Demand-Bot
          </h1>

          <button
            onClick={handleStart}
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "20px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Start For Free
          </button>
        </div>

        {/* Footer Links */}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            fontSize: "14px",
          }}
        >
          <a
            href="mailto:eshagoel3010@gmail.com?subject=Hackathon Support/Feedback"
            style={{ color: "#0e0e0eff", textDecoration: "none" }}
          >
            <FaEnvelope style={{ marginRight: "5px" }} />
            Contact us
          </a>
          <a
            href="https://www.canva.com/design/DAGy1UyZ4Rg/KXkRttblNJmWcLEF_oAfbA/edit?utm_content=DAGy1UyZ4Rg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            style={{ color: "#0f1010ff", textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
          >
            <FaGlobe style={{ marginRight: "5px" }} />
            Wiki Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
