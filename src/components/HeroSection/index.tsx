import React from "react";
// import Video1 from "../../assets/videos/video-1.mp4";
import Video2 from "../../assets/videos/video-2.mp4";
import { Button } from "../Button";
import { FaPlayCircle } from "react-icons/fa";

import "../../App.css";
import "./styles.css";

export const HeroSection: React.FC = () => {
  return (
    <div className="hero-container">
      <video src={Video2} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <FaPlayCircle />
        </Button>
      </div>
    </div>
  );
};
