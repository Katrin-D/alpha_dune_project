import React from "react";
import S from "../styles/Intro.module.scss";
import Button from "./Button.jsx";
import { useLocomotiveScroll } from "react-locomotive-scroll";

function Intro() {
  const { scroll } = useLocomotiveScroll();
  return (
    <div className={S.intro} id="intro">
      <div className="container">
        <div className={S.wrapper}>
          <div className={S.intro_content}>
            <h1 className="lineTitle" data-scroll data-scroll-speed="2">
              SHAPE THE FUTURE of our Web3{" "}
              <span data-scroll data-scroll-class="lineAnim" data-scroll-repeat>
                ecosystem.
              </span>
            </h1>
            <div data-scroll data-scroll-speed="3" data-scroll-position="top">
              <Button text="Read Docs" isGlow={false} isWhite />
              <Button text="Join Discord" />
            </div>
          </div>
          <div className={S.animation}>
            <video muted autoPlay loop playsInline preload="metadata">
              <source src={"/introAnimation.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
